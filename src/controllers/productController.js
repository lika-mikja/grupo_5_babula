const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));

const menuDelDia = products.filter(function(product){
	return product.menuDelDia == true
})


const mainController = {
    detalle: (req, res) => {
        let plato = listaDePlatos.find(plato => plato.id == req.params.id)
        res.render("./products/:id", { plato });
    },

    productCreate: (req, res) => {
        res.render('./users/product-create-form', {
        });
    }
}

module.exports = mainController;
