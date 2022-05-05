
//Dependencias
const express = require('express');
const app = express();
// Modulo nativo para manejar las rutas de los archivos//
const path = require("path");

// Recursos estaticos //
app.use(express.static(path.resolve(__dirname, "./public")));

// Configuración
app.set ("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views")); /* Indica a express donde buscar las vistas */



// Rutas 
app.get('/login', (req, res) => { 
    res.sendFile(path.resolve(__dirname , './src/views/users/login'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/users/register'))
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/users/index"))
 });

app.get('/shop', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/products/shop"))
});

app.get('/product', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/products/product"))
});

app.listen(4000, () => {
    console.log('Servidor funcionando en el puerto http://localhost:4000');
});