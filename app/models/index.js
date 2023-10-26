const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.list = require("../models/list.model.js")(sequelize, Sequelize);
db.task = require("../models/task.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles"
});
db.user.belongsToMany(db.role, {
  through: "user_roles"
});

db.user.hasMany(db.list, {as: 'list'});
db.list.belongsTo(db.user,{
  foreignKey: 'userId',
  as: 'user'
});

db.list.hasMany(db.task, {as: 'task'});
db.task.belongsTo(db.list,{
  foreignKey: 'listId',
  as: 'list'
});


db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
