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
        let respuesta = {
          count: {
            total: users.length,
          },
          users: {
            id: users.id,
            name: users.firstName ,
            email: users.email,
            //detail:

          }
        }
        res.json(respuesta)
      })
  },
  detail: (req, res) => {
    userInDb.findByPk(req.params.id)
      .then(user => {
        let respuesta = {
          
        }
        res.json(respuesta);
      })

  }
}
module.exports = userController;
