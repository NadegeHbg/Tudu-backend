import mongoose from "mongoose";
import { uuid } from 'uuidv4'
const pTask_schema = new mongoose.Schema({

    // id: {
    //   type: String,
    //   default: uuid,
    //   unique: true,
    // },
    creator:{
    
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user_model'
      },
      
      
    
    pTaskName : {
      type: String,
      // type: required,
    },
    
    description: {
      type: String,
    },

    category: {
      type: String,
      required: true,
    },

    dueDate: {
      type: Date,
      
    },
      entryDate: {
      type: Date,
    },

    url: {
      type: String,
    },

    place: {
      type: String,
    },

    style: {
      type: Number,
    },
    isDone: {
      type: Boolean,
      default:false,
    },
    
    
  },
  { timestamps: true }
);
 const pTask_model = mongoose.model("personalTask", pTask_schema);
 export default pTask_model;