const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get('/api/getClients', async (req, res) => {
  try {
    const result = await db.query(`select * from users`);
    res.send(result.rows);
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
    }
})

app.post('/api/getClientInfo', async (req, res) => {
  const data = req.body;
  const name = data.name;
    try {
    const result = await db.query(`SELECT * FROM finder('${name.toLowerCase()}')`);
    res.send(result.rows);
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
    }
});

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
