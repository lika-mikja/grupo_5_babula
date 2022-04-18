const express = require('express');
const app = express();
// modulo nativo para manejar las rutas de los archivos//
const path = require("path");

// recursos estaticos //
app.use(express.static(path.resolve(__dirname, "./public")));


app.listen(3000, () => {
    console.log('Servidor funcionando en el puerto http://localhost:3000');
});


app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});