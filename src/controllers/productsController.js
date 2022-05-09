const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));

const controller = {
	index: (req, res) => {
		res.render('./products/products', {
			products
		})
	},

    detail: (req, res) => {
        let id = req.params.id
        let plato = products.find(plato => plato.id == id)
        res.render('./products/detail', {
            plato
        })
    },

    productCreate: (req, res) => {
        res.render('./products/product-create-form');

    },

    shop: (req, res) => {
        res.render('./products/shop');

    },
};

module.exports = controller;