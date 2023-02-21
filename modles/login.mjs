//@DESC  CREATE SCHEMA AND MODEL FOR login
import mongoose from "mongoose";
import bcrypt, { hash } from "bcrypt";
// 1. create Schema
const login_schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Too Short Password"],
    },
    // active:{
    //     type: Boolean,
    //     default: true
    // },
    // profileImg: String,
  },
  { timestamps: true }
);
// login_schema.methods.hashPassword = (password) => {
//     return bcrypt.hashSync(password,hash)
// }

const User = mongoose.model("User", login_schema);
export default User;
