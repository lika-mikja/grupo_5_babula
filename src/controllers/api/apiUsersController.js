const path = require("path");
const fs = require("fs");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../../database/models");


const userInDb = db.User;

const userController = {
  list: (req, res) => {
    userInDb.findAll()
      .then(users => {
        users.forEach((user, i) => {
          user.dataValues.detail = "http://localhost:4000/api/users/" + user.dataValues.id
        });
        let respuesta = {
          count: {
            total: users.length,
          },
          users: users
          /* {
          id: users.id,
          firstName: users.firstName,
          lastName: users.lastName,
          email: users.email
          }*/
        }
        res.json(respuesta)
      }) .catch(error => res.send(error))
  },

  detail: (req, res) => {
    userInDb.findByPk(req.params.id)
      .then(user => {
        let respuesta = {
          data: {
            user: user ,
            imgURL: "http://localhost:4000/images/users/" + user.avatar,
            dbRelations: ["roleId"],
          }

        }
        res.json(respuesta);
      }) .catch(error => res.send(error))

  }
}
module.exports = userController;
