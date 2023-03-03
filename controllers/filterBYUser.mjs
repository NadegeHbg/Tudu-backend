// @Desc  Update tudu by id 
// @Route put: api/tudu//filter/user/:userName   
import asyncHandler from "express-async-handler";
import user_model from "../models/userModel.mjs";

const filterByUsr = asyncHandler(async(req,res) => {
    const userName = req.params.userName;
    const filterUser =  await user_model.findOne({userName: userName});
      if(!filterUser) {
        res.status(404).json({ msg :`there is no user name with this name ${filterUser}`});
    } 
    res.status(200).json({data : filterUser})
    
  
});
export default filterByUsr