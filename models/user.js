//Defining User Table Schema

module.exports=(sequelize,DataTypes)=>{

const User =sequelize.define('User', {
  //Model attributes are defined here
  firstName:{
    type:DataTypes.STRING,
    allowNull:false,
    
  },
  lastName:{
    type:DataTypes.STRING,
    allowNull:false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  }
  


});
return User;

}