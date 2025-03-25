import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DATABASE,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT,
});

pool.on("connect", () => {
  console.log("Connection pool established with Database");
});
export default pool;
