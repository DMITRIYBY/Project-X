const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM my_table');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});