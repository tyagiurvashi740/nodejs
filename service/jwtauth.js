const jwt=require("jsonwebtoken")
const key="Tyagi@#"
function setUsers(user) {
    const payload = {
    id:user.id,
    email: user.email,
    };
    return jwt.sign(payload, key);
}
    function getUser(Token) {
        if(!Token){
            return null;
        }
    return jwt.verify(Token,key)
    }
module.exports={
    setUsers,
    getUser
}
