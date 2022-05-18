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

    store: (req, res) => {
		let nuevoProducto = {
			id: products[products.length - 1].id + 1,
			title: req.body.name,
            desctiption: req.body.description,
            ingredients: req.body.descripcion_ingredientes ,
			prince: parseInt(req.body.price),
			img: req.file ? req.file.filename : "default-image.jpg" ,
            todaysmenu: req.body.menuDelDia
		}

		products.push(nuevoProducto);
		fs.writeFileSync(productsFile, JSON.stringify(products, null, " "));

		res.redirect("/products");
	},

    productEdit: (req, res) => {
        res.render('./products/product-edit-form');

    },

    shop: (req, res) => {
        res.render('./products/shop');

    },
};

/* $document.getElementById("file").onchange = function (e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
        let preview = document.getElementById("preview");
        image = document.createElement("img");
        image.src = reader.result;
        images.style.width = "150px";
        preview.innerHTML = ";"
        preview.append(imagen);
    }
} */

module.exports = controller;