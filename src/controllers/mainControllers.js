//const { create } = require('domain'); //
const fs = require('fs');
const path = require('path');

const mainController = {
    index: (req, res) => {
        res.render("./users/index", { listaPlatos });
    },


}

module.exports = mainController;