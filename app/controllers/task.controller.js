const db = require("../models");
const config = require("../config/auth.config");

const Task = db.task;

exports.createTask = (req, res) => {
    Task.create({
        name: req.body.name,
        listId: req.body.listId,
        done: false,
    })
    .then(task => {
    console.log(task);
    res.status(201).send(task);
    })
    .catch(err => {
    res.status(500).send({ message: err.message });
    });
};

exports.taskCompleted = (req, res) => {
    // const {id, name, listId } = req.body; 
    // if(){

    // }
    Task.update(req.body,{
        where: {
          id: req.params.id
        }
      })
    .then(task => {      
        res.status(200).send(task);
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.taskMoved = async (req, res) => {
    const id = req.params.id;
    Task.destroy({
        where: {id: id}
    }).then((task) => {
        console.log(task);
    }).catch(err => {
        console.log(err);
    })
    
    Task.create({
        name: req.body.name,
        listId: req.body.listId,
        done: false,
    })
    .then(task => {
    console.log(task);
    res.status(200).send(task);
    })
    .catch(err => {
    res.status(500).send({ message: err.message });
    });
};