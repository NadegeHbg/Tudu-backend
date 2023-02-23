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
      
    }


      return res.send("user registered")

      
    }
  }
);

passportConfig(passport);

export default userRegister;

