import asyncHandler from "express-async-handler";
import User from "../../models/login.mjs";
import bcrypt from "bcrypt";
import passport from "passport";
import passportConfig from "../../config/passport.mjs";
// import ensureAuthenticated from "../../config/auth.mjs";

// Register Form
const userRegister = asyncHandler(async (req, res,next) => {

  const { email, password,conformation,username,firstname,secondname } = req.body;
  console.log(req.body, "register with frontend");

  let errors = [];



  if (errors.length > 0) {
    res.send("register", {
      errors: errors,
      email: email,
      password: password,
      conformation:conformation,
      username:username,
      firstname:firstname,
      secondname:secondname
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
          conformation:hashedPassword,
          username: username,
          firstname: firstname,
          secondname: secondname,
        });
        await newUser.save();
        // console.log(newUser);
      }
    } catch (error) {
      console.error(error);
      console.log(req);
    }

    return res.send("user registered");
  }
});

passportConfig(passport);

export default userRegister;
