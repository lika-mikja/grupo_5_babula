
const fs = require('fs');
const path = require('path');
const db = require("../../database/models");
const sequelize = db.sequelize;

const productInDb = db.Product;

const productsController = {
    allData: (req, res) => {
        productInDb.findAll()
            .then(products => {
                products.forEach((product, i) => {
                    product.dataValues.detail= "http://localhost:4000/api/products/" + product.dataValues.id
                });
                let respuesta = {
                    count: {
                        total: products.length,
                    },
                    countByCategory: {
                        
                    },
                    products: products ,
                    
                }
                res.json(respuesta)
            })
    },
    detail: (req, res) => {
        let productId = req.params.id
        productInDb.findByPk(productId)
            .then(plato => {
                let respuesta = {
                plato: plato 
                }
                res.json(respuesta);
            })
            
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