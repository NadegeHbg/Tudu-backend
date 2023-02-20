import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const pTask_schema = new mongoose.Schema(
  {
    // id: {
    //   type: String,
    //   default: uuidv4,
    //   unique: true,
    // },
    pTaskName: {
      type: String,
    //   type: required,
    },
    description: {
      type: String,
    },

    category: {
      type: String,
      required: true,
    },

    // dueDate: {
    //   type: Date,
      
    // },
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
  },
  { timestamps: true }
);
 const pTask_model = mongoose.model("personalTask", pTask_schema);
 export default pTask_model;