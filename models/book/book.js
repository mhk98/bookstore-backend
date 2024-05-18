const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const book = sequelize.define("book", {
    Id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    timestamps: true
  });

  return book;
};
