const db = require("../models");
const config = require("../config/auth.config");

const User = db.user;
const List = db.list;
const Task = db.task;

exports.findUserById = (req, res) => {
  const userId = req.params.id;
  User.findByPk(userId, {
    include: [
      {
        model: List,
        as: 'list', // Specify the alias for the list association
        include: [
          {
            model: Task,
            as: 'task', // Specify the alias for the task association
          }
        ],
      },
    ],
  })
    .then((user) => {
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Cannot Fetch User");
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
