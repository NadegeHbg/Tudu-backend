import passport from "passport";
const userLogin =(req,res,next)=>{
    passport.authenticate('local',{
        successRedirect : '/dashboard',
        failureRedirect : '/users/login',
        // failureFlash : true,
        })(req,res,next);
}
export default userLogin;