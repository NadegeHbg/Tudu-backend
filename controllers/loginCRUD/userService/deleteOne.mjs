import asyncHandler from "express-async-handler"
import getUsers from "../../showUsers.mjs"
import User from "../../../modles/login.mjs"
import deleteOne from "../../deleteUse.mjs"
//@decs      Delete User
//@router    delete/api/tudu/users:id
//
const deleteUser = getUsers.deleteOne(User);



export default deleteUser