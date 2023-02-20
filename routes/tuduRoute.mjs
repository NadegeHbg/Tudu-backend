//@DESC RIUTER FILES
import express from "express";
import createUser from "../controllers/createUserTudu.mjs";
import getUser from "../controllers/showUsers.mjs";
import create_pTask from "../controllers/createPTask.mjs";
import getPTask from "../controllers/showPersonalTask.mjs";
import updateByUsr from "../controllers/updateUser.mjs";
import deleteByUser from "../controllers/deleteUse.mjs";
// import user_login from "../controllers/loginCRUD/user_login.mjs"
// import user_register from "../controllers/loginCRUD/user_login.mjs";
// import login from "../controllers/loginCRUD/user_login.mjs"
const router = express.Router();
router.get("/", getUser);
router.post("/user", createUser);
router.post("/task", create_pTask);
router.get("/pTask", getPTask);
router.put("/find/userName/:userName", updateByUsr);
router.delete("/delete/userName/:userName", deleteByUser);


export default router;
