//const { create } = require('domain'); //
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const todaysDay = products.filter(function(plato){
    return plato.todaysDay == true
})

const controller = {
    index: (req, res) => {
        res.render('index', {
            todaysDay
        });
    },
};

module.exports = controller;