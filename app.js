const express = require('express');
const app = express();
// Modulo nativo para manejar las rutas de los archivos//
const path = require("path");

// Recursos estaticos //
app.use(express.static(path.resolve(__dirname, "./public")));

// Que las vistas se vean por ejs
app.set ("view engine", "ejs");
app.set("views", "./views/pages"); /* Indica a express donde buscar las vistas */


app.listen(4000, () => {
    console.log('Servidor funcionando en el puerto http://localhost:4000');
});

app.get('/login', (req, res) => { 
    res.sendFile(path.resolve(__dirname , './views/login.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.get('/shop', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/shop.html"))
});

app.get('/product', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/product.html"))
});

