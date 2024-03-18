//Defining Post Table Schema

module.exports=(sequelize,DataTypes)=>{

const Post = sequelize.define('Post', {
    title:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
   content:{
    type:DataTypes.STRING,

   }
});
return Post
}
