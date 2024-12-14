'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define associations here
    }
  }

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Nama tidak boleh kosong!"
        },
        notEmpty: {
          msg: "Nama tidak boleh kosong!"
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Username telah digunakan"
      },
      validate: {
        notNull: {
          msg: "Username tidak boleh kosong!"
        },
        notEmpty: {
          msg: "Username tidak boleh kosong!"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password tidak boleh kosong!"
        },
        notEmpty: {
          msg: "Password tidak boleh kosong!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
