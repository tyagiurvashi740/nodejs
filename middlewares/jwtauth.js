const {getUser}=require("../service/jwtauth")
let restrictedToLoggedInUsers=(req,res,next)=>{
    const userToken=req.cookies?.userToken
    if(!userToken){
        res.json({message:"Please login"})
    }
    const user=getUser(userToken)
    if(!user){
        res.json({message:"Please login"})
    }
    res.user=user;
    next()


}
module.exports={
    restrictedToLoggedInUsers
}