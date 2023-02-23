
import express from "express";
import morgan from "morgan";
import dbConnection from "./config/database.mjs";
import dotenv from "dotenv";
import router from "./routes/tuduRoute.mjs";


import bodyParser from "body-parser";
// import session from "express-session";
// import flash from "connect-flash";
import passport from "passport";
import ensureAuthenticated from "./config/auth.mjs";


dotenv.config();

// connect with database
dbConnection();

// app express
const app = express();

// morgan midlleweare
app.use(express.json()); // to make parcing for json
if (process.env.Node_env === "development") {
  app.use(morgan("dev"));
  console.log(`mode:${process.env.Node_env}`);
};
//Mount Routes
app.use("/api/tudu/", router);

app.get("/", (req, res) => {
  res.send("Welcome in TuDu", router);
});

// BodyParser
// Use body-parser to parse JSON data sent via HTTP POST
app.use(bodyParser.json());
app.use(express.urlencoded({extended : true}))




app.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    // successRedirect: "/dashboard",
    // failureRedirect: "/users/login",
    // failureFlash: true,
  })
  (req, res, next);
});


app.get("/dashboard", ensureAuthenticated, (req, res) => {
  console.log(req);
  res.render("dashboard", { user: req.user });
});

//logout
app.get("/logout", (req, res) => {
  req.logout();

  res.redirect("/users/login");
});


const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});



/*
import express from "express";
import morgan from "morgan";
import dbConnection from "./config/database.mjs";
import dotenv from "dotenv";
import router from "./routes/tuduRoute.mjs";
import passport from "passport";
import ensureAuthenticated from "./config/auth.mjs";

dotenv.config();

// connect with database
dbConnection();

// app express
const app = express();

// morgan middleware
app.use(express.json()); // to make parsing for json
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode:${process.env.NODE_ENV}`);
};

// Mount Routes
app.use("/api/tudu", router);

app.get("/", (req, res) => {
  res.send("Welcome in TuDu");
});

// Welcome login page
app.get("/dashboard", ensureAuthenticated, (req, res) => {
  console.log(req);
  res.render("dashboard", { user: req.user });
});

// Login handle
app.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/users/login",
    // failureFlash: true,
  })(req, res, next);
});

// Logout
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/users/login");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
*/