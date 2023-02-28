//@Desc   Delete tudu by id 
//@Route  delete: api/tudu/delete/id/:id 
import user_model from "../modles/userModel.mjs";
import asyncHandler from "express-async-handler";

const deleteById = asyncHandler(async(req,res,next) => {
    const id = req.params.id;
    const deleteId = await user_model.findByIdAndDelete(id)
    if(!deleteId) {
        res.status(404).json({ msg :`there is no user name with this id ${id}`});
    } 
    res.status(200).json({msg : `The user has been deleted...`})
    
});
export default deleteById
