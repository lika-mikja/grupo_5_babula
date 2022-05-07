const express = require('express');
const app = express();
// Modulo nativo para manejar las rutas de los archivos//
const path = require("path");

// Recursos estaticos //
app.use(express.static(path.join(__dirname, '../public')));

// Que las vistas se vean por ejs
app.set('view engine', 'ejs');
/* Indica a express donde buscar las vistas */
app.set('views', path.join(__dirname, '/views')); 


/* Requerimiento y uso de sistema de Rutas..*/ 
const mainRouter = require('./routes/mainRouter');
app.use("/", mainRouter);



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


// Servidor
app.listen(4000, () => {
    console.log('Servidor funcionando en el puerto http://localhost:4000');
});