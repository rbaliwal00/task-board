const db = require("../models");
const config = require("../config/auth.config");

const List = db.list;

exports.creatList = (req, res) => {
    const {userId} = req.body;
    // Save User to Database
    List.create({
        name: req.body.name,
        userId: userId
    })
      .then(list => {
       console.log(list);
       res.status(201).send(list);
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

exports.getAllTaskForList = (req, res) => {
    const id = req.params.id;
    // Save User to Database
    List.findByPk(id,{ include: ["task"] })
    .then(list => {
    console.log(list);
    res.status(200).send(list);
    })
    .catch(err => {
    res.status(500).send({ message: err.message });
    });
};