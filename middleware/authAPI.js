const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

verifyAPIKey = (req,res,next)=>{
  let apiKey = req.headers["x-api-key"];
  if (!apiKey) {
    return res.status(403).send({
      message: "No APIKey provided!"
    });
  }

  User.findOne({
    where: {
      apiKey: apiKey
    }
  }).then(apiResult =>{
    if(!apiResult){
      return res.status(404).send({ message: "API Not found." });
    }
    next();
    return;
  })
}

const authAPI = {
  verifyAPIKey:verifyAPIKey,
};
module.exports = authAPI;