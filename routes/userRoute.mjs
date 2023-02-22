import express from "express";
// import getAllUsers from "../controllers/loginCRUD/userService/showAllUsers.mjs"
// import getOne from "../controllers/loginCRUD/userService/showOne.mjs"
// import createOne from "../controllers/loginCRUD/userService/createOne.mjs"
// import updateOne from "../controllers/loginCRUD/userService/updateOne.mjs"
// import deleteOne from "../controllers/loginCRUD/userService/deleteOne.mjs"
// import getAllUsers from "../controllers/loginCRUD/login.mjs"
// import createOne from "../controllers/loginCRUD/register.mjs"
import userRegister from "../controllers/loginCRUD/userRegister.mjs";
// import login from "../controllers/loginCRUD/login.mjs";
// import register from "../controllers/loginCRUD/register.mjs";
import userLogin from "../controllers/loginCRUD/userLogin.mjs";
import logout from "../controllers/loginCRUD/logout.mjs";
import ensureAuthenticated from "../config/auth.mjs";
// import passportSetup from "../modles/login.mjs"
const router = express.Router();
// const app = express();
// registration Post request
router.post("/users/register", userRegister);
// login Post
router.post("/users/login", userLogin); // give  authentication

//logout get request
router.get("/users/logout", logout);

// app.get("/register", reg);
router.get("/dashboard", ensureAuthenticated, userRegister); // check authentication

// //login get
// app.get("/users/login", login);
// //
// app.get("/users/register", register);

export default router;
