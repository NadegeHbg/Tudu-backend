//@Desc filter by id and isDone
//@Route get api/tudu//user/:id/:isDone
import asyncHandler from "express-async-handler";
import pTask_model from "../models/pTasksModel.mjs";

const filterIsDone = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const isDone = req.params.isDone;

  console.log(id);
  console.log(isDone);
  const getDone = await pTask_model.find({_id: id, isDone: isDone });
 
  if (!getDone) {
    res.status(404)
      .json({
        msg: `there is no category name with this name ${category} and id ${id}`,
      });
  }
  res.status(200).json({ data: getDone });
});

export default filterIsDone;
