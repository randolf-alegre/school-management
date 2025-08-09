const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const { name, className, section, roll } = req.query;
    const students = await getAllStudents({ name, className, section, roll });
    res.json({ students });

});

const handleAddStudent = asyncHandler(async (req, res) => {
    const payload = req.body;
    const result = await addNewStudent(payload);
    res.json(result);

});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const { id: userId } = req.params;
    const payload = req.body;
    const result = await updateStudent({ ...payload, userId });
    res.json(result);

});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id: userId } = req.params;
    const result = await getStudentDetail(userId);
    res.json(result);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { id: userId } = req.params;
    const payload = req.body;
    const result = await setStudentStatus({ ...payload, userId });
    res.json(result);

});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
