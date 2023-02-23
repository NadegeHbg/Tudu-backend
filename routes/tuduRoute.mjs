//@DESC RIUTER FILES
import express from "express";
import createUser from "../controllers/createUserTudu.mjs";
import getUser from "../controllers/showUsers.mjs";
import create_pTask from "../controllers/createPTask.mjs";
import getPTask from "../controllers/showPersonalTask.mjs";
import updateByUsr from "../controllers/updateUser.mjs";
import deleteByUser from "../controllers/deleteUse.mjs";

import userRegister from "../controllers/loginCRUD/userRegister.mjs";
import userLogin from "../controllers/loginCRUD/userLogin.mjs";
import logout from "../controllers/loginCRUD/logout.mjs";
import ensureAuthenticated from "../config/auth.mjs";

const router = express.Router();

router.get("/users", getUser);
router.post("/user", createUser);
router.post("/task", create_pTask);
router.get("/ptask", getPTask);
router.put("/find/userName/:userName", updateByUsr);
router.delete("/delete/userName/:userName", deleteByUser);

// registration Post request
router.post("/users/register", userRegister);
// login Post
router.post("/users/login", userLogin); // give  authentication

//logout get request
router.get("/users/logout", logout);

// app.get("/register", reg);
router.get("/dashboard", ensureAuthenticated, userRegister); // check authentication

export default router;

// code from chatgpt
/*
import express from "express";
import createUser from "../controllers/createUserTudu.mjs";
import getUser from "../controllers/showUsers.mjs";
import create_pTask from "../controllers/createPTask.mjs";
import getPTask from "../controllers/showPersonalTask.mjs";
import updateByUsr from "../controllers/updateUser.mjs";
import deleteByUser from "../controllers/deleteUse.mjs";

import userRegister from "../controllers/loginCRUD/userRegister.mjs";
import userLogin from "../controllers/loginCRUD/userLogin.mjs";
import logout from "../controllers/loginCRUD/logout.mjs";
import ensureAuthenticated from "../config/auth.mjs";

const router = express.Router();

router.get("/users", getUser);
router.post("/user", createUser);
router.post("/task", create_pTask);
router.get("/ptask", getPTask);
router.put("/find/userName/:userName", updateByUsr);
router.delete("/delete/userName/:userName", deleteByUser);

// registration Post request
router.post("/users/register", userRegister);

// login Post
router.post("/users/login", userLogin); // give  authentication

//logout get request
router.get("/users/logout", logout);

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  // handle "/dashboard" route here
});

export default router;
*/