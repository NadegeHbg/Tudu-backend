import asyncHandler from "express-async-handler"
// import getUsers from "../../showUsers.mjs"
import User from "../../../modles/login.mjs"
import getUsers from "../../showUsers.mjs"
import user_mod from "../../../modles/userModel.mjs"
//@decs      Create  User
//@router    post/api/tudu/users
//
const createOne = (user_mod) =>
  asyncHandler(async (req, res) => {
    const newDoc = await Model.create(req.body);
    res.status(201).json({ data: newDoc });
  });
const createUser = getUsers.createOne(User)
// const userRegister = asyncHandler(async (req,res)=>{
//     const  {email,password} =  req.body;
//     let errors = [];
//     console.log(`email : ${email}  pass: {password}`);
// if(!email || !password ) {
//     errors.push({msg : "Please fill in all fields"})
// }
// });

// //check if password is more than 6 characters
// if(password.length < 6 ) {
//     errors.push({msg : 'password atleast 6 characters'})
// }
// if(errors.length > 0 ) {
// res.render('register', {
//     errors : errors,
//     email : email,
//     password : password,
//     })
// }

export default createUser