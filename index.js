const express=require("express")
const bodyParser=require("body-parser")
const cookieParser=require("cookie-parser")
// const {restrictedToLoggedInUsers}=require("./middlewares/auth")
const {restrictedToLoggedInUsers}=require("./middlewares/jwtauth")



//This will create the server .Now we need not to create server from http module 
const app=express()

app.use(bodyParser.json())
app.use(cookieParser())
require("./models/config")

//Now we have access to all the methods defined in the usercontroller.js
const userCtrl=require("./controller/usercontroller")
const PORT=3000
app.get("/",(req,res)=>{
    res.send("Hello world")

})

app.get("/add",userCtrl.addUser)
app.post("/users",userCtrl.createUser)
app.get("/users",restrictedToLoggedInUsers,userCtrl.getAllUsers)
app.get("/users/:id",userCtrl.getUserById)
app.patch("/users/:id",userCtrl.updateUser)
app.delete("/users/:id",userCtrl.deleteUser)
app.post("/login",userCtrl.authUsers)



app.listen(PORT,()=>{
    console.log("I am running on the server")
})
