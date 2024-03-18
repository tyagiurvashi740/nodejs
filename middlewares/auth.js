const {getUser}=require("../service/authservice")
let restrictedToLoggedInUsers=(req,res,next)=>{
    const userUUId=req.cookies?.uuid
    if(!userUUId){
        res.json({message:"Please login"})
    }
    const user=getUser(userUUId)
    if(!user){
        res.json({message:"Please login"})
    }
    res.user=user;
    next()


}
module.exports={
    restrictedToLoggedInUsers
}