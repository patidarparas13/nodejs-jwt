const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.findAll = (req, res) => {
  User.findAll()
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "Users Not found." });
      }
        res.status(200).send(user);
      })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.findByID = (req,res)=>{
  User.findByPk(req.params.userId)
  .then(user => {
    if (!user) {
      return res.status(404).send({ message: "Users Not found." });
    }
      res.status(200).send(user);
    })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

exports.updateByID = (req,res)=>{
  User.findByPk(req.params.userId)
  .then(user => {
    if (!user) {
      return res.status(404).send({ message: "Users Not found." });
    }
    user.update({
      activeStatus:req.body.activeStatus
    })
      res.status(200).send(user);
    })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

exports.deleteByID = (req,res)=>{
  //User.findByPk(req.params.userId)
  User.destroy({
    where: {
       id: req.params.userId //this will be your id that you want to delete
    }
 }).then(deletedRow => {
      if(deletedRow===1){
        res.status(200).send("User Deleted")
      }
      else{
        res.status(500).send("User Not Deleted");
      }
    })

      //res.status(200).send(user);
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};


exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };