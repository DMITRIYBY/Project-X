//to run on another port: export PORT=Number && node index
import express from "express";

const PORT = process.env.PORT ?? 3001;



const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });


app.get('/GettingStarted', (req, res) => {
    
    res.send("Hello, let's start =>");
    // res.download('./downloads/test.html');
})

app.get('/Abilities', (req, res) => {

    res.send("We can create any application for you");
})

app.get('/OurTeam', (req, res) => {
    
    res.send("Main developer: DMITRIYBY");
})

app.get('/Admin', (req, res) => {
    
    res.send("This link for administration");
})

app.listen(PORT, () => {
    console.log(`server has been started on port ${PORT}...`);
}); 