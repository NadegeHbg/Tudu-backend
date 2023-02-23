//logout
// import asyncHandler from "express-async-handler";
import session from "express-session";
const logout = (req, res,next) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(400).send('Unable to log out')
      } else {
        res.send('Logout successful')
      }
    });
  } else {
    res.end()
  }
}

  export default logout