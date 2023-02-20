
import User from "../../modles/login.mjs"
// import passportConfig from "../../config/passport.mjs";
// import passport from "passport"
// Login users view
// Register Handle

const user_register = (req, res) => {
    const { email, password } = req.body;
    let errors = [];
    console.log(`email ${email} password ${password}`);
    if (!email || !password) {
      errors.push({ msg: `fill in all fields` });
    }
    // Check if password is more than 6 characters
    if (password.length < 6) {
      errors.push({ msg: `password atleast 6 characters` });
    }
    if (errors.length > 0) {
      res.render("register", {
        errors: errors,
        email: email,
        password: password,
      });
    } else {
      // validation passed
      User.findOne({ email: email }).exec((err, user) => {
        console.log(user + "yoo");
        if (user) {
          errors.push({ msg: "email already registered" });
          render(res, errors, email, password);
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
              newUser
                .save()
                .then((value) => {
                  console.log(value);
                  req.flash("success_msg", "You have now registered!");
                  res.redirect("/users/login");
                })
                .catch((value) => console.log(value));
            })
          );
        }
      });
    }
  };
  
  // passportConfig(passport);

  export default user_register;