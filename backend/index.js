const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get('/api/getApartments', async (req, res) => {
  try {
    const result = await db.query(`CAL good_price()`);
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

app.post('/api/auth_realtor', async (req, res) => {

  const data = req.body;
  console.log("input data:", data)
  try {
    const result = await db.query(`select auth_realtor('${data.name}', '${data.password}')`);
    // console.log('result' + result)
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
  console.log(data.user_id)
  
  try {
  const result = await db.query(`CALL add_realtor('${data.user_id}')`);
  } catch (err) {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
  }
})

app.post('/api/addApartment', async (req, res) => {

  const data = req.body;
  console.log(data)
  try {
  const result = await db.query(`SELECT add_apartment('${data.complex_id}', '${data.number}', '${data.floor}', '${data.rooms}', '${data.price}', '${data.description}', '${data.photo_url}', '${data.realtor_id}')`);
  } catch (err) {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
  }
})

app.post('/api/addComplex', async (req, res) => {

  const data = req.body;
  console.log(data)
  try {
  const result = await db.query(`SELECT add_residential_complex('${data.name}', '${data.adress}', ${data.realtor_id})`);
  } catch (err) {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
  }
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
