import passport from "passport";
// import session from "express-session";
import bcrypt from "bcrypt"
import asyncHandler from "express-async-handler"
import User from "../../modles/login.mjs";
const userLogin = asyncHandler(async(req, res) => {
        const { email, password } = req.body;
      
        // Check if the email exists in the database
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).send('Invalid email or password');
        }
      
        // Check if the password is correct
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          return res.status(401).send('Invalid email or password');
        }
      
        // Set the session or JWT token
        // req.session.userId = user.id; // Using sessions
      
        // Send a response indicating that the login was successful
        res.send('Login successful');
      });
export default userLogin;