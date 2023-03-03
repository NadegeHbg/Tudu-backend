import passport from "passport";
import session from "express-session";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import User from "../../models/login.mjs";
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body, "from frontend ");

  // Check if the email exists in the database
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).send("Invalid email or password");
  }

  // Check if the password is correct
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).send("Invalid email or password");
  }

  // Set the session or JWT token
  req.session.userId = user.id; // Using sessions
  console.log(user.id);
  // Send a response indicating that the login was successful
  
  res.send(user.id);
  // res.send(user.email)
  console.log(req.body);
});
export default userLogin;
