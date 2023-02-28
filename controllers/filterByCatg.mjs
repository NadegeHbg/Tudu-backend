// @Desc filter tudu by categoryt
// @Route get: api/tudu/find/ctg/:ctg
import asyncHandler from "express-async-handler";
import pTask_model from "../modles/pTasksModel.mjs";
const filterByCtg = asyncHandler(async (req, res) => {
  let category = req.params.ctg;
//   console.log(category, "category");
  const findCtg = await pTask_model.find({category:category});

  if (findCtg.length === 0) {
    res
      .status(404)
      .json({ msg: `there is no category name with this name ${findCtg}` });
  }
  res.status(200).json({ data: findCtg });
});
export default filterByCtg;
