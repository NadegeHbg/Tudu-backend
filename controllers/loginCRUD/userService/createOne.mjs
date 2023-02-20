import asyncHandler from "express-async-handler"
import getUsers from "../../showUsers.mjs"
import User from "../../../modles/login.mjs"
//@decs      Create  User
//@router    post/api/tudu/users
//
const createUser = getUsers.createOne(User);



export default createUser;