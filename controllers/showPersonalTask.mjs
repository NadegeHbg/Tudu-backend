// @Desc show personal Tasks  
// @Route  get: api/tudu/ptask     

import asyncHandler from "express-async-handler";
import user_model from "../models/pTasksModel.mjs";
//  @Desc     Get List Of Categories
//  @Route    GET /api/tudu/
const getPTask = asyncHandler(async (req, res,next) => {
  const id = req.params.id
  const data = await user_model.findById(id);
  res.status(200).json({ results: data.length, data : data });
});

export default getPTask;