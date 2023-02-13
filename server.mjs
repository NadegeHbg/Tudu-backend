import express  from "express";
import morgan from "morgan";
import dbConnection from "./config/database.mjs";

import dotenv  from "dotenv";
dotenv.config();
dbConnection();
// app express
 const app = express();
// morgan 
if(process.env.Node_env === 'development'){
    app.use(morgan('dev'));
    console.log(`mode:${process.env.Node_env}`);
};

//app
app.use(express.json());

app.get("/",(req,res) => {
    res.send("Welcome in TuDu")
})




const port =process.env.port ||5000;
app.listen(port,() => {
    console.log(`App running on port ${port}`);
})