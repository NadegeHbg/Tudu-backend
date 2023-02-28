// @Desc show personal Tasks  
// @Route  put: api/tudu/ptask     

import asyncHandler from "express-async-handler";
import user_model from "../modles/pTasksModel.mjs";
//  @Desc     Get List Of Categories
//  @Route    GET /api/tudu/
const getPTask = asyncHandler(async (req, res,next) => {
  const data = await user_model.find({});
  res.status(200).json({ results: data.length, data : data });
});

export default getPTask;