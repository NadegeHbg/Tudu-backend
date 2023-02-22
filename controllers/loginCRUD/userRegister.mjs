import asyncHandler from "express-async-handler";
import User from "../../modles/login.mjs";
import bcrypt from "bcrypt";
import passport from "passport";
import passportConfig from "../../config/passport.mjs";
import { render } from "ejs";
import mongoose from "mongoose";
//login handle
// Sign Up Form
const userRegister = (req, res) => {
  const { email, password } = req.body;
  console.log(req.body, "req.body");
  let errors = [];
  console.log(" email :" + email + " pass:" + password);
  if (!email || !password) {
    errors.push({ msg: "Please fill in all fields" });
  }
  //check if password is more than 6 characters
  // if (password.length < 6) {
  //   errors.push({ msg: "password atleast 6 characters" });
  // }

  //validation passed
  User.findOne({ email: email }).exec((err, user) => {
    console.log(user + "you");
    if (user) {
      errors.push({ msg: "email already registered" });
      res.render("register", { email, password });
    } else {
      const newUser = new User({
        email: email,
        password: password,
      });
      //hash password
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          //save pass to hash
          newUser.password = hash;
          //save user
          // newUser.save().then((value) => {
          //   res.status(201).json({value });
          //     // req.flash("success_msg", "You have now registered!");
          //     res.redirect("/users/login");
          //   })
          //   .catch((value) => console.log(value));
          newUser
            .save()
            .then((savedUser) => {
              res.status(201).json(savedUser);
            })
            .catch((error) => {
              console.error(error);
              res.status(500).json({ error: "Failed to save user" });
            });
        })
      );
    }
  });
};

passportConfig(passport);

export default userRegister;
