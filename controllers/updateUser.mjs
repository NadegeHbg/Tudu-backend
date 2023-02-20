import asyncHandler from "express-async-handler";
import user_model from "../modles/userModel.mjs";

const updateByUsr = asyncHandler(async(req,res) => {
    const updateUser =  await user_model.findOneAndUpdate(
        {userName: req.params.userName},
        {
          $set: req.body,
        },
        { new: true }
      );
      if(!updateUser) {
        res.status(404).json({ msg :`there is no user name with this name ${updateUser}`});
    } 
    res.status(200).json({data : updateUser})
    
  
});
export default updateByUsr


