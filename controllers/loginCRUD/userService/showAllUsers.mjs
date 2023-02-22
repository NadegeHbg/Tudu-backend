import asyncHandler from "express-async-handler"
import getPTask from "../../showPersonalTask.mjs";
import getUsers from "../../showUsers.mjs"
import User from "../../../modles/login.mjs"
//@decs      Get All Of Users
//@router    get/api/tudu/users
//
const getAllUsers = getUsers.getAll(User);
// const getAll =  (req, res) => {
//     let filter = {};
//     if (req.filterId) {
//       filter = req.filterObj;
//     }
// }


export default getAllUsers