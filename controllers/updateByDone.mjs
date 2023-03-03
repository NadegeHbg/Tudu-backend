import asyncHandler from "express-async-handler";
import pTask_model from "../models/pTasksModel.mjs";

const updateByDone = asyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(id);

  const getDone = await pTask_model.findByIdAndUpdate(req.params.id, {
    isDone: true,
  });
  if (!getDone) {
    res.status(404).json({ message: "Task not found" });
  } else {
    res.status(200).json({ message: "Task updated successfully" });
  }

  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

export default updateByDone;
