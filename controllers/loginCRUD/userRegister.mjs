/*
// import asyncHandler from "express-async-handler";
import User from "../../modles/login.mjs";
import bcrypt from "bcrypt";
import passport from "passport";
import passportConfig from "../../config/passport.mjs";
// import ensureAuthenticated from "../../config/auth.mjs"

//login handle
// Register Form
const userRegister = (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body, "req.body");
  let errors = [];
  console.log(" email :" + email + " pass:" + password);
  if (!email || !password) {
    errors.push({ msg: "Please fill in all fields" });
  };
  //check if password is more than 6 characters
  if (password.length < 6) {
    errors.push({ msg: "password atleast 6 characters" });
  }
  if(errors.length > 0 ) {
    res.render('register', {
        errors : errors,
        email : email,
        password : password})
    } else {
  //validation passed
  User.findOne({ email: email }).exec((err, user) => {
    console.log(user + "you");
    if (user) {
      errors.push({ msg: "email already registered" });
      // res.render("register", { email, password });
      res.send(res,errors,email,password);
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
          // save user
          newUser
          .save().then((value) => {
            console.log(val);
            // req.flash('success_msg','You have now registered!')
            // res.redirect('/users/login')
          })
          .catch(value => console.log(value));

        }))
        return res.send("user registered")
    }
  })
}
}


passportConfig(passport);

export default userRegister;
*/


import asyncHandler from "express-async-handler";
import User from "../../modles/login.mjs";
import bcrypt from "bcrypt";
import passport from "passport";
import passportConfig from "../../config/passport.mjs";
// import ensureAuthenticated from "../../config/auth.mjs";

// Register Form
const userRegister = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  
  let errors = [];

  if (!email || !password) {
    errors.push({ msg: "Please fill in all fields" });
  }
  
  if (password.length < 6) {
    errors.push({ msg: "Password must be at least 6 characters" });
  }

  if (errors.length > 0 ) {
    res.render('register', {
      errors: errors,
      email: email,
      password: password
    });
  } else {
    const userExists = await User.findOne({ email: email });
    
    // if (userExists) {
    //   errors.push({ msg: "Email already registered" });
    //   res.send("ok");
    // } else {
      
    //   const hashedPassword = await bcrypt.hash(password, 10)

    //   const newUser = new User({
    //     email: email,
    //     password: hashedPassword,
    //   });

    //   await newUser.save();
    
    try {
      if (userExists) {
        errors.push({ msg: "Email already registered" });
        res.send("ok");
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          email: email,
          password: hashedPassword,
        });
        await newUser.save();
      }
    } catch (error) {
      console.error(error);
      // Handle the error here, e.g.:
      // res.status(500).send("Internal server error");
    }


      return res.send("user registered")

      // res.redirect('/users/login');
    }
  }
);

passportConfig(passport);

export default userRegister;

