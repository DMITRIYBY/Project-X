const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  // try {
  //   const result = await db.query(`insert into users values(2, 'Alexander', 'kosten@tyt.by', 'pupokSlona')`);
  //   console.log(result.rows);
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({ error: 'Something went wrong' });
  // }
});

app.get('/api/getClients', async (req, res) => {
  try {
    const result = await db.query(`select * from users`);
    res.send(result.rows);
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
    }
})

app.post('/api/addClient', async (req, res) => {

  const data = req.body;
  
  try {
  const result = await db.query(`CALL add_client(${data.id}, '${data.name}', '${data.email}', '${data.password}')`);
  console.log(result.rows);
  } catch (err) {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
  }
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
