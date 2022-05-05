const express = require('express');
const app = express();
// Modulo nativo para manejar las rutas de los archivos//
const path = require("path");

// Recursos estaticos //
app.use(express.static(path.join(__dirname, '../public')));

// Que las vistas se vean por ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); /* Indica a express donde buscar las vistas */


app.listen(4000, () => {
    console.log('Servidor funcionando en el puerto http://localhost:4000');
});

app.get('/login', (req, res) => { 
    res.render(path.resolve(__dirname , './views/users/login'))
});

app.get('/register', (req, res) => {
    res.render(path.resolve(__dirname, './views/users/register'))
});

app.get("/", (req, res) => {
    res.render(path.resolve(__dirname, './views/users/index'))
});

app.get('/shop', (req, res) => {
    res.render(path.resolve(__dirname, './views/products/shop'))
});

app.get('/product', (req, res) => {
    res.render(path.resolve(__dirname, './views/products/product'))
});

