const { encryptPwd } = require('../helpers/bcrypt')

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Please use a valid email address"
        },
        notEmpty: {
          msg: "Email cannot be empty"
        },
      },
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^(?=[a-zA-Z0-9]*[a-zA-Z])(?=[a-zA-Z0-9]*\d)[a-zA-Z0-9]*$/i,
          msg: "Please enter alphanumeric password",
        },
        notEmpty: {
          msg: "Please enter a password"
        }
      },
    }
  }, {
    hooks: {
      beforeCreate(User) {
        User.password = encryptPwd(User.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User
};