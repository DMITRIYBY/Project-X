//to run on another port: export PORT=Number && node index
import express from "express";

const PORT = process.env.PORT ?? 3000;

const app = express();

app.listen(PORT, () => {
    console.log(`server has been started on port ${PORT}...`);
}); 