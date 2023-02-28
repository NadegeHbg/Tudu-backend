// @Desc Delete tudu by user name 
// @Route  delete: api/tudu/delete/userName/:userName 
import asyncHandler from "express-async-handler";
import user_model from "../modles/userModel.mjs";


const deleteByUser = asyncHandler(async(req,res,next) =>{
    const deleteUser = await user_model.findOneAndDelete(
    {userName: req.params.userName},
    { $set: req.body },
    );
    if(!deleteUser) {
        res.status(404).json({ msg :`there is no user name with this name ${deleteUser}`});
    } 
    res.status(200).json({msg : `The user has been deleted...`})
    
});
export default deleteByUser;