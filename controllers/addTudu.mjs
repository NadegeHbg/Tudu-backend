//  @Desc     Create Category
//  @Route    POST /api/tudu/user
import asyncHandler from "express-async-handler";
import user_model from "../modles/userModel.mjs";


const create_user = asyncHandler(async (req, res) => {
  
  const {userName,firstName, secondName, style, rewards, coins} = req.body
  
  const user = new user_model({  
    // id : id,
    userName: userName,

    firstName: firstName,

    secondName: secondName,

    style: style,

    rewards: rewards,

    coins: coins,
    
  },
  
  
);
  
  const saved_user = await user.save();

  res.status(201).json(saved_user);
  

  res.status(500).json(err);
});

export default create_user;

