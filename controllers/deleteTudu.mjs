//@desc   Delete tudu by id
//@ Route delete: user/deleteTudu/:id
import pTask_model from "../models/pTasksModel.mjs";
import asyncHandler from "express-async-handler";

const deleteTudu = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const deleteById = await pTask_model.findByIdAndDelete(id);
  if (!deleteById) {
    res.status(404).json({ msg: `there is no tudu  with this id ${id}` });
  }
  res.status(200).json({ msg: `The tudu has been deleted...` });
});
export default deleteTudu;
