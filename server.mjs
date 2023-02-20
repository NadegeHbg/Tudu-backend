import express  from "express";
import morgan from "morgan";
import dbConnection from "./config/database.mjs";
import dotenv  from "dotenv";
import router from "./routes/tuduRoute.mjs";
import routerUser from "./routes/userRoute.mjs";
import expressEjsLayouts from "express-ejs-layouts"
import bodyParser from "body-parser"
// import dbConnection from "./modle/userSchema.mjs";
dotenv.config();

// connect with database
dbConnection();

// app express
 const app = express();

 //setting view engine to ejs
app.set("view engine", "ejs");

// morgan midlleweare
app.use(express.json());  // to make parcing for json
if(process.env.Node_env === 'development'){
    app.use(morgan('dev'));
    console.log(`mode:${process.env.Node_env}`);
};

//Mount Routes
app.use('/api/tudu',router)
app.use('/api/tudu',routerUser)

app.get("/",(req,res) => {
    res.send("Welcome in TuDu",router);
})

app.set('view engine', 'ejs');
app.use(expressEjsLayouts);
// Use body-parser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));
// Use body-parser to parse JSON data sent via HTTP POST
app.use(bodyParser.json());
app.use(express.urlencoded({extended : false}));



const port =process.env.port || 5000;
app.listen(port,() => {
    console.log(`App running on port ${port}`);
})