const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

pool.query(`
  insert into users values(2, 'Alex', 'kosten@tut.by', 'poopokSlona');
`, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res);
  }
  
  pool.end();
});

process.on('SIGINT', () => {
    pool.end();
    process.exit();
  });

  // CREATE TABLE IF NOT EXISTS users (
  //   id SERIAL PRIMARY KEY,
  //   name VARCHAR(255) NOT NULL,
  //   email VARCHAR(255) NOT NULL,
  //   password VARCHAR(255) NOT NULL
  // );