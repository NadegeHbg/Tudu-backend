//@DESC RIUTER FILES
import express from "express";
import createUser from "../controllers/addNewUser.mjs";
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
// import deleteById from "../controllers/deleteUser.mjs"; // delete user
import editById from "../controllers/editTudu.mjs";
import updateByDone from "../controllers/updateByDone.mjs";
import filterByCtgId from "../controllers/filterByCatg.mjs";
import deleteTudu from "../controllers/deleteTudu.mjs";
import filterIsDone from "../controllers/fiterIsDone.mjs";

const router = express.Router();

// registration Post request     O.K
router.post("/register", userRegister);

// login Post  O.K
router.post("/user/login", userLogin); // give  authentication // send back user id

//add a tudu   O.K
router.post("/personal/addTudu", create_pTask);

//tudu get alltudu by id-- O.K
router.get("/user/getTudu/:id", getPTask);

// filter by category -- get id filter by id and category -- yet to complete
router.get("/user/getTudu/:ctg/:id/", filterByCtgId);

//filter active tudu isdone : true or it might be false --yet to complete
router.get("/user/:id/:isDone", filterIsDone);

// put isDone to true  O.K
router.put("/user/updateTudu/:id", updateByDone);

// edit by id  O.K
router.put("/user/editTudu/:id", editById);

//logout get request
router.post("/user/logout", logout);

// delete a tudu by id  O.K
router.delete("/user/deleteTudu/:id", deleteTudu);

router.get("/user", getUser);
router.post("/createUser", createUser);
router.get("/filter/user/:userName", filterByUsr);
router.put("/find/update/:userName", updateByUsr);
router.delete("/delete/userName/:userName", deleteByUser);
// app.get("/register", reg);
// check authentication

export default router;
