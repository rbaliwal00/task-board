const db = require("../models");
const config = require("../config/auth.config");

const User = db.user;

exports.findUserById = (req, res) => {
  const userId = req.params.id;
  User.findByPk(userId, {
    include: ["list"],
  }).then((user) => {
    res.status(200).send(user);
  }).catch((err) => {
    res.status(400).send("CAnnot Fetch User!!");
  });
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
