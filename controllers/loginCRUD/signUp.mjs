import express from "express";
import asyncHandler from "express-async-handler";
import login_model from "../../modles/login.mjs";
// Sign Up Form
router.get ('/signup', (req,res) => {
    res.render('user/signup')
})

//Sign Up Post Request
router.post('/signup',(req,res) => {
    console.log(req.body);
    res.josn('register in user ... ')
})