import asyncHandler from "express-async-handler"
import getUsers from "../../showUsers.mjs"
import User from "../../../modles/login.mjs"
//@decs      Edit User
//@router    put/api/tudu/users:id
//
const updateUser = getUsers.updateOne(User);



export default updateUser;