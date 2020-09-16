module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      apiKey:{
        type: Sequelize.STRING,
        defaultValue: ''
      }
    });
  
    return User;
  };