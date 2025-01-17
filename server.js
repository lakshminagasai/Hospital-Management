const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors =require ("cors")

//dotenv
dotenv.config();
//mongodb connection
connectDB();
//rest objects

const app = express();

//middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

//routes
app.use("/api/v1/user",require("./routes/userRoutes"))

app.use("/api/v1/admin",require("./routes/adminRoutes"))

app.use("/api/v1/doctor",require("./routes/doctorRoutes"))

//port
const port= process.env.PORT ||  5300;
//listen
app.listen(port,()=>{
    console.log(`Server Running in ${process.env.NODE_MODE} Mode on port ${port}`);
});