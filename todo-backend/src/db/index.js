const { Pool } = require('pg');

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "Todo",
  password: "nicky1122",
  port: 5432,
};

const pool = new Pool(credentials);

module.exports = pool;
