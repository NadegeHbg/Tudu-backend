//logout
// import asyncHandler from "express-async-handler";
import session from "express-session";
const logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.redirect('/');
    }
  });
};


  export default logout