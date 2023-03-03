//@Desc  logout
//@Route post: /user/logout

import asyncHadler from "express-async-handler"

const logout = asyncHadler (async (req, res) => {

  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.send('/');
      }
    });
  } else {
    res.send('/user/login');
  }
})

  export default logout