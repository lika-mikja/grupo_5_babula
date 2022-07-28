
const fs = require('fs');
const path = require('path');
const db = require("../../database/models");
const sequelize = db.sequelize;

const productInDb = db.User;

const productsController = {
    allData: (req, res) => {
        productInDb.findAll()
            .then(products => {
                let respuesta = {
                    count: {
                        total: products.length,
                    },
                    countByCategory: {
                    },
                    products: {

                    },
                    detail: {

                    }
                }
                res.json(respuesta)
            })
    },
    detail: (req, res) => {
        let productId = req.params.id
        productInDb.findByPk(productId)
            .then(plato => {
                let respuesta = {
                    
                }
            })
            res.json(respuesta);
    },

    /*
        store: function (req, res) {
            Products.create({
                title: req.body.title,
                price: parseInt(req.body.price),
                ingredients: req.body.ingredients,
                img: req.file ? req.file.filename : "default-image.jpg",
                description: req.body.description,
                categoryId: req.body.category,
                todaysDay: req.body.todaysDay
            })
    
                .then(() => {
                    res.redirect('/products')
                })
                .catch(error => res.send(error))
        },
    
    };
    
    */
}
    module.exports = productsController;