import express from 'express';
const router = express.Router();
import login_model from "../../modles/login.mjs"
import bcrypt from "bcrypt";
import passport from "passport";
import passportConfig from '../../config/passport.mjs';
//login handle
const login = (req,res)=>{
    res.render('login');
}

const register = (req,res)=>{
    res.render('register');
}

//Register handle

const userRegister = (req,res)=>{
    const {name,email, password, password2} = req.body;
    let errors = [];
    console.log(' Name ' + name+ ' email :' + email+ ' pass:' + password);
if(!name || !email || !password || !password2) {
    errors.push({msg : "Please fill in all fields"})
}
//check if match
if(password !== password2) {
    errors.push({msg : "passwords dont match"});
}

//check if password is more than 6 characters
if(password.length < 6 ) {
    errors.push({msg : 'password atleast 6 characters'})
}
if(errors.length > 0 ) {
res.render('register', {
    errors : errors,
    email : email,
    password : password,
    })
} else {
    //validation passed
   login_model.findOne({email : email}).exec((err,user)=>{
    console.log(user + "yoo");   
    if(user) {
        errors.push({msg: 'email already registered'});
         render(res,errors,email,password);
        
       } else {
        const newUser = new login_model({
            email : email,
            password : password });
            //hash password
            bcrypt.genSalt(10,(err,salt)=> 
            bcrypt.hash(newUser.password,salt,
                (err,hash)=> {
                    if(err) throw err;
                        //save pass to hash
                        newUser.password = hash;
                    //save user
                    newUser
                    .save()
                    .then((value)=>{
                        console.log(value)
                        req.flash('success_msg','You have now registered!')
                    res.redirect('/users/login');
                    })
                    .catch(value=> console.log(value));
                      
                }));   
       }
    })
    }
}

 passportConfig(passport);

const userLogin =(req,res,next)=>{
    passport.authenticate('local',{
        successRedirect : '/dashboard',
        failureRedirect : '/users/login',
        failureFlash : true,
        })(req,res,next);
}

//logout
const logout = (req,res)=>{
    req.logout();
    req.flash('success_msg','Now logged out');
    res.redirect('/users/login');
}


 
export {login, register, userRegister, userLogin, logout};