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
			title: req.body.title,
            description: req.body.description,
            ingredients: req.body.ingredients ,
			price: parseInt(req.body.price),
			img: req.body.product_image ? req.body.product_image : "default-image.jpg" ,
            todaysmenu: req.body.todaysDay
		}
        				products.push(nuevoProducto);
		fs.writeFileSync(productsFile, JSON.stringify(products, null, " "));

		res.redirect("/products");
	},

    productEdit: (req, res) => {
            let id = req.params.id
            let plato = products.find(plato => plato.id == id);
            let productToEdit = products.find(product => product.id == id);
            res.render('./products/product-edit-form', {plato , productToEdit});

        },
        // Update - Method to update
    update: (req, res) => {
            const id = req.params.id;
            let productToEdit = products.find(product => product.id == id);
            
            let productToSave = {
                id: productToEdit.id,
                title: req.body.title,
                price: req.body.price,
                ingredients: req.body.ingredients,
                category: req.body.category,
                description: req.body.description,
                img: req.file ? req.file.filename : productToEdit.img
            }
    
            let indice = products.findIndex(product => {
                return product.id == id
            })
            products[indice] = productToSave;
    
            fs.writeFileSync(productsFile, JSON.stringify(products, null, " "));
            res.redirect("/products")
        },

        shop: (req, res) => {
        res.render('./products/shop');

        }
}

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