const pool = require('../db/index');

const saveUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Insert the new user into the database with constant values
    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {saveUser}

