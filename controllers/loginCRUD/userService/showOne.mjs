import asyncHandler from "express-async-handler"
import getUsers from "../../showUsers.mjs"
import User from "../../../modles/login.mjs"
//@decs      Get specific Users
//@router    get/api/tudu/users:id
//
const getUser = getUsers.getOne(User);



export default getUser;