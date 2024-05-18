
const db = require("../db/db");
const { DataTypes } = require("sequelize");

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Connection re-synced");
  })
  .catch((err) => {
    console.log("Error on re-synced", err);
  });


db.book = require("./book/book")(db.sequelize, DataTypes);


module.exports = db;
