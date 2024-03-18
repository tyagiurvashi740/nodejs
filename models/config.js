const {Sequelize,DataTypes}=require("sequelize")

//Providing all the details to make the database connection
const sequelize = new Sequelize('about', 'root', 'TyAGiu@#852$%', {
    host: 'localhost',
    dialect: 'mysql'
  });

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


  const db={}
  db.Sequelize=Sequelize
  db.sequelize=sequelize
  db.user=require('./user')(sequelize,DataTypes)
  db.post=require('./post')(sequelize,DataTypes)
  db.sequelize.sync()

  module.exports=db
  