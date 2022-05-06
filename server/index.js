const express = require('express');
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/dataBase");
dotenv.config({ path: "./config/.env" });

// data base connection
connectDB();


app.use(express.json());


const product = require("./routes/productRoute");
const reservation = require("./routes/reservation");
app.use("/api/v1", reservation);
app.use("/api/v1", product);


app.listen(process.env.PORT, () => {
    console.log(`app running on port ${process.env.PORT}`)
});