//@DESC  CREATE SCHEMA AND MODEL FOR USERS
import mongoose from "mongoose";
// import{ v4 as uuidv4 } from 'uuid';
// 1. create Schema
 const user_schema = new mongoose.Schema({
  
  // id: {
  //      type: String, 
  //      default: uuidv4,
  //      unique : true,
  // },
    userName: {
      type: String,
      required: true
    },

    firstName: {
      type: String,
      required: true
    },

    secondName: {
      type: String,
      required: true
    },

    style: {
      type: Number
    },

    rewards: {
      type: Number
    },

    coins: {
      type: Number
    },
  },
  {timestamps:true}
);

 
// 2. creating a modle , converts schema to modle
 const user_model = mongoose.model("users", user_schema);
export default user_model

// export default user_model;
// export default pTask_model;
