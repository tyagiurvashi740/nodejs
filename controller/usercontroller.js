const {v4: uuidv4} =require('uuid')
const db=require('../models/config')
// const {setUsers}=require("../service/authservice")
   const {setUsers}=require("../service/jwtauth")


const User=db.user

//Simple use of build and save methods
let addUser=async(req,res)=>{
const jane = User.build({ firstName: "Jane" ,lastName:"Tyagi",email:"urvashityagi852@gmai.com",password:"Tyagi@#852"});
console.log(jane instanceof User); // true
console.log(jane.name); 
await jane.save();
console.log('Jane was saved to the database!');
res.status(200).json({data:jane})
}

//Create user in the Users table using post request
let createUser=async (req,res)=>{
    const userData=await User.create(req.body);
    res.status(201).json({data:userData})
}


//Get all Users from the User Model
let getAllUsers=async (req,res)=>{
    const allUsers=await User.findAll();
    res.status(200).json({allUsers:allUsers})
}

//Get the particular user using id from the User Model 
let  getUserById=async (req,res)=>{
    const user=await User.findOne({
        where:{
            id:req.params.id
        }
    })
    res.status(200).json({userData:user})
}

//update the user field values using patch request
let updateUser=async(req,res)=>{
    const updatedUser=req.body
    const data=await User.update(updatedUser,{
        where:{
            id:req.params.id
        }
    })
    res.status(200).json({message:"upadtedSuccessfully"})
    
}

//delete user based on the id provided .If we get 1 then user is successfully deleted 
let deleteUser=async (req,res)=>{
    const user=await User.destroy({
        where:{
            id:req.params.id
        }
    })
    if(user===null){
        res.json({message:"user not exist"})
    }

    res.status(200).json({data:user})


}

let authUsers=async (req,res)=>{
        const { email, password } = req.body;
      
        try {
          // Find user by email
          const user = await User.findOne({ where: { email } });
          
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
          
          // Compare passwords
          let passwordMatch =false;
          if(password===user.password){
              passwordMatch=true;
          }
      
          if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid password' });
          }
        //   const sessionId=uuidv4();
        //   setUsers(sessionId,user)
             const token=setUsers(user);


      
          // Passwords match, authentication successful
          
          res.cookie("userToken",token).status(200).json({ message: 'Authentication successful' });
        } catch (error) {
          console.error('Error during authentication:', error);
          res.status(500).json({ message: 'Internal server error' });
        }
    }




//exporting all the methods and we can now access them in the other files
module.exports={
    addUser,
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    authUsers

}
