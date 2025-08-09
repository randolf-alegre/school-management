const { Pool } = require("pg");
const { env } = require("./env");

const DATABASE_URL=`postgresql://postgres:${encodeURIComponent(env.DATABASE_PASSWORD)}@localhost:5432/${env.DATABASE_NAME}`

const db = new Pool({
  connectionString: DATABASE_URL,
});

module.exports = { db };
