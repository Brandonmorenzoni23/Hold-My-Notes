const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');
const homeRouter = require('./routes/home');
const connectDB = require('./config/database');
const app = express();

//Body Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Use .env file in config folder
require('dotenv').config({ path: './src/config/.env' })


app.use(express.json());
app.use(cors());

app.use("/", authRouter);
app.use("/home", homeRouter);


//Connect To Database
connectDB({})

app.listen(3001, () => console.log("Server started"));