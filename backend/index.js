const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get('/api/getApartments', async (req, res) => {
  try {
    const result = await db.query(`select * from apartments`);
    // console.log(result.rwos)
    res.send(result.rows);
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
    }
})

app.get('/api/getComplexes', async (req, res) => {
  try {
    const result = await db.query(`select * from residential_complexes`);
    // console.log(result.rwos)
    res.send(result.rows);
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
    }
})

app.post('/api/getCurrentApartment', async (req, res) => {
  const data = req.body;
    try {
    const result = await db.query(`select * from apartments where id=${data.id}::INTEGER`);
    console.log(result.rows);
    res.send(result.rows);
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
    }
});

app.post('/api/addClient', async (req, res) => {

  const data = req.body;
  
  try {
  const result = await db.query(`CALL add_user('${data.email}', '${data.password}', '${data.role}', '${data.name}');
  `);
  console.log(result.rows);
  } catch (err) {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
  }
})

app.post('/api/addRealtor', async (req, res) => {

  const data = req.body;
  
  try {
  const result = await db.query(`CALL add_realtor('${data.id}')`);
  } catch (err) {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
  }
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
