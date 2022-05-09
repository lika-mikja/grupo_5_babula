//const { create } = require('domain'); //
const fs = require('fs');
const path = require('path');

let controller = {

    login: (req, res) => {
        res.render('./users/login', {
        });
    },

    register: (req, res) => {
        res.render('./users/register', {
        });
    },

}

module.exports = controller;