// @Desc Show all tudu by user 
//  get  get: api/tudu/users     
import asyncHandler from "express-async-handler";
import user_model from "../models/userModel.mjs";
//  @Desc     Get List Of Categories
//  @Route    GET /api/tudu/catg
//  @Acces    Puplic
const getUsers = asyncHandler(async (req, res,next) => {
  const data = await user_model.find({});
  res.status(200).json({ results: data.length, data : data });
  // res.render('users/index')
});

export default getUsers;