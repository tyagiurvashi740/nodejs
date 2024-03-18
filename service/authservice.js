//This is for the stateful authentication
const sessionIdToUsersMap=new Map();
let setUsers=(id,user)=>{
    sessionIdToUsersMap.set(id,user);
}
let getUser=(id)=>{
    return sessionIdToUsersMap.get(id);
}
module.exports={
    setUsers,
    getUser
}
