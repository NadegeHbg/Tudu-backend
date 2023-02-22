import asyncHandler from "express-async-handler";
import pTask_model from "../modles/pTasksModel.mjs"

//  @Desc     Create Category
//  @Route    POST /api/tudu/catg
//  @Acces    Praivet
const create_pTask = asyncHandler(async (req, res,next) => {
  
  const {user_id,pTaskName, description, category, dueDate, entryDate,url,place,style} = req.body
  
  const pTask = new pTask_model({  
    // id : id,
    user_id:user_id,
    pTaskName: pTaskName,
    description: description,
    category: category,
     dueDate:dueDate,
      entryDate: entryDate,
      url: url,
      place: place,
      style: style,
    
  },
  
  
);
  
  const saved_pTask = await pTask.save();

  
  res.status(201).json({data: saved_pTask });

  res.status(500).json(err);
});

export default create_pTask;

