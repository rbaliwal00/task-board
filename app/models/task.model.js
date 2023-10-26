module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
      name: {
        type: Sequelize.STRING
      },
      done: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Task;
  };
  