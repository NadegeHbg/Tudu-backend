//logout
const logout = (req,res)=>{
    req.logout();
    
    res.redirect('/users/login');
}
  export default logout