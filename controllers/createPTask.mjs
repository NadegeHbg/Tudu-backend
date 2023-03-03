//  @Desc     add tudu
//  @Route    POST /api/tudu/task
import asyncHandler from "express-async-handler";
import pTask_model from "../models/pTasksModel.mjs";
// import { uuid } from "uuidv4";

const create_pTask = asyncHandler(async (req, res, next) => {
  const {
    creator,
    pTaskName,
    description,
    category,
    dueDate,
    entryDate,
    url,
    place,
    isdone,
    style,
    
  } = req.body;
  // Check if user_id is valid

  const pTask = new pTask_model({
    // id : id,
    // user_id: user_id,
    creator: creator,
    pTaskName: pTaskName,
    description: description,
    category: category,
    dueDate: dueDate,
    entryDate: entryDate,
    url: url,
    place: place,
    style: style,
    isdone: isdone,
  });
  const saved_pTask = await pTask.save();

  res.status(201).json({ data: saved_pTask });

  res.status(500).json(err);
});

export default create_pTask;
