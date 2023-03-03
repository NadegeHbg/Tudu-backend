// @Desc filter tudu by categoryt and id
// @Route get: api/tudu//user/getTudu/:ctg/:id
import asyncHandler from "express-async-handler";

import pTask_model from "../models/pTasksModel.mjs";
const filterByCtgId = asyncHandler(async (req, res) => {
  const  category = req.params.ctg;
  const id = req.params.id;
  console.log(id);
  console.log(category);
  const findCtg = await pTask_model.find({ _id: id, category: category });
  // console.log(category);
  if (!findCtg) {
    res.status(404)
      .json({
        msg: `there is no category name with this name ${category} and id ${id}`,
      });
  }
  res.status(200).json({ data: findCtg });
});
export default filterByCtgId;
