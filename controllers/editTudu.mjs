// @Desc Update tudu by id 
// @Route  put: api/tudu/user/editTudu/:id 

import user_model from "../models/userModel.mjs";
import asyncHandler from "express-async-handler";

const editById = asyncHandler(async(req,res,next) => {
    const id = req.params.id;
    const update = req.body;
    const editId = await user_model.findByIdAndUpdate(id, update, { new: true });
    if(!editId) {
        res.status(404).json({ msg :`there is no user name with this id ${id}`});
    } 
    res.status(200).json({data:editId})
    
});
export default editById

