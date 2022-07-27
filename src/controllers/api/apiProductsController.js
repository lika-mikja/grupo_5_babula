
const fs = require('fs');
const path = require('path');
const db = require("../../database/models");
const sequelize = db.sequelize;


const productsController = {
    allData: (req, res) => {
        Products.findAll()
            .then(products => {
                let respuesta = {

                }
                res.json(respuesta)
            })
    },
}
/*   detail: (req, res) => {
        let productId = req.params.id
        Products.findByPk(productId)
            .then(plato => {
                res.render('./products/detail', { plato });
            });
    },

    productCreate: (req, res) => {
        res.render('./products/productCreateForm');
    },

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

    productEdit: (req, res) => {
        let productId = req.params.id
        Products.findByPk(productId)
            .then(Plato => {
                res.render('./products/productEditForm', { Plato })
            })
            .catch(error => res.send(error))
    },

    update: (req, res) => {
        let productId = req.params.id;
        Products.update({
            title: req.body.title,
            price: parseInt(req.body.price),
            ingredients: req.body.ingredients,
            category: req.body.category,
            description: req.body.description,
            img: req.file ? req.file.filename : Products.img,
            todaysDay: req.body.todaysDay
        }, {
            where: { id: productId }
        })
            .then(() => {
                res.redirect('/products/detail/' + productId)
            })
            .catch(error => res.send(error))
    },

    destroy: (req, res) => {
        let productId = req.params.id;
        Products.findByPk(productId)
            .then(productToDestroy => {
                let productImageDirectory = path.join(productsImagesRoute, productToDestroy.img)
                fs.unlinkSync(productImageDirectory)
                Products.destroy({ where: { id: productId }, force: true })
                    .then(() => {
                        res.redirect('/products')
                    })
            })
            .catch(error => res.send(error))
    },

    shop: (req, res) => {
        res.render('./products/shop');
    }
};

*/
module.exports = productsController;