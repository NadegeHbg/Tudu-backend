//@DESC RIUTER FILES
import express from "express";
import createUser from "../controllers/addTudu.mjs";
import getUser from "../controllers/showTuduUsers.mjs";
import create_pTask from "../controllers/createPTask.mjs";
import getPTask from "../controllers/showPersonalTask.mjs";
import updateByUsr from "../controllers/updateUser.mjs";
import deleteByUser from "../controllers/deleteTuduByUser.mjs";

import userRegister from "../controllers/loginCRUD/userRegister.mjs";
import userLogin from "../controllers/loginCRUD/userLogin.mjs";
import logout from "../controllers/loginCRUD/logout.mjs";
import ensureAuthenticated from "../config/auth.mjs";
import filterByUsr from "../controllers/filterBYUser.mjs";
import deleteById from "../controllers/deleteTudu.mjs";
import editById from "../controllers/editTudu.mjs";
import filterByCtg from "../controllers/filterByCatg.mjs";
import filterByDone from "../controllers/filterByIsDone.mjs";

const router = express.Router();

router.get("/users", getUser);
router.post("/user", createUser);
router.post("/task", create_pTask);
router.get("/ptask", getPTask);
router.get("/filter/user/:userName", filterByUsr);
router.put("/find/update/:userName", updateByUsr);
router.put("/edit/id/:id", editById);
router.delete("/delete/userName/:userName", deleteByUser);
router.delete("/delete/id/:id", deleteById);
router.get("/find/ptask/ctg/:ctg", filterByCtg);
router.get("/find/ptask/isDone/:id", filterByDone);

// registration Post request
router.post("/register", userRegister);
// login Post
router.post("/users/login", userLogin); // give  authentication

//logout get request
router.get("/users/logout", logout);

// app.get("/register", reg);
// check authentication

export default router;
