const fs = require('fs');
const path = require('path');
const db = require ("../database/models")
const sequelize = db.sequelize;

const productsFile = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));

const controller = {
    /*index: (req, res) => {
        db.Product.findAll()
        .then(products => {
            res.render("./products/products", {products})
        })
        },*/
	index: (req, res) => {
	res.render('./products/products', {
			products
		}) },
    /*
     'detail': (req, res) => {
        db.Product.findByPk(req.params.id,
            {
                include : ['genre']
            })
            .then(products => {
                res.render('./products:detail', {plato});
            });
    */
    detail: (req, res) => {
        let id = req.params.id
        let plato = products.find(plato => plato.id == id)
        res.render('./products/detail', {
            plato
        })
    },
    
    productCreate: (req, res) => {
        res.render('./products/productCreateForm');

    },

    store: (req, res) => {
		let nuevoProducto = {
			id: products[products.length - 1].id + 1,
			title: req.body.title,
            description: req.body.description,
            ingredients: req.body.ingredients ,
			price: parseInt(req.body.price),
            category: req.body.category,
			img: req.file ? req.file.filename: "default-image.jpg" ,
            todaysDay: Boolean(req.body.todaysDay)
		}
        products.push(nuevoProducto);
		fs.writeFileSync(productsFile, JSON.stringify(products, null, " "));

		res.redirect("/products");
	},

    productEdit: (req, res) => {
            let id = req.params.id
            let plato = products.find(plato => plato.id == id);
            let productToEdit = products.find(product => product.id == id);
            res.render('./products/productEditForm', {plato , productToEdit});

        },
        // Update - Method to update
    update: (req, res) => {
            const id = req.params.id;
            let productToEdit = products.find(product => product.id == id);
            let productToSave = {
                id: productToEdit.id,
                title: req.body.title,
                price: parseInt(req.body.price),
                ingredients: req.body.ingredients,
                category: req.body.category,
                description: req.body.description,
                img: req.file ? req.file.filename : productToEdit.img,
                todaysDay: Boolean(req.body.todaysDay)
            }
    
            let indice = products.findIndex(product => {
                return product.id == id
            })
            products[indice] = productToSave;
    
            fs.writeFileSync(productsFile, JSON.stringify(products, null, " "));
            res.redirect("/products")
        },

        destroy : (req, res) => {
            const id = req.params.id;
            let finalProducts = products.filter(product => product.id != id);
    
            fs.writeFileSync(productsFile, JSON.stringify(finalProducts, null, ' '));
            res.redirect("/products")
        },

        shop: (req, res) => {
        res.render('./products/shop');
}

};


module.exports = controller;