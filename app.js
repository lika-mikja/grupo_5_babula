const express = require('express');
const app = express();
// modulo nativo para manejar las rutas de los archivos//
const path = require("path");

// recursos estaticos //
app.use(express.static(path.resolve(__dirname, "./public")));


app.listen(4000, () => {
    console.log('Servidor funcionando en el puerto http://localhost:4000');
});

app.get('/Login.html', (req, res) => {
    res.sendFile(__dirname + '/views/Login.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.get('/carrito.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/carrito.html"))
});

app.get('/productos.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productos.html"))
});

