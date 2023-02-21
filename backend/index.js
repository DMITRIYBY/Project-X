//to run on another port: export PORT=Number && node index
import express from "express";

const PORT = process.env.PORT ?? 3001;

const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });


app.get('/', (req, res) => {
    
    res.send("Hello");
})

app.listen(PORT, () => {
    console.log(`server has been started on port ${PORT}...`);
}); 