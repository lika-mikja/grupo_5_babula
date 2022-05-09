const express = require('express');
const app = express();
// Modulo nativo para manejar las rutas de los archivos//
const path = require("path");

// Recursos estaticos //
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json()); // Para que se usa??

// Que las vistas se vean por ejs
app.set('view engine', 'ejs');
/* Indica a express donde buscar las vistas */
app.set('views', path.join(__dirname, '/views'));

/* Requerimiento y uso de sistema de Rutas..*/
const mainRouter = require('./routes/mainRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');

app.use("/", mainRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);


// Servidor
app.listen(4000, () => {
    console.log('Servidor funcionando en el puerto http://localhost:4000');
});


document.getElementById('file').onchange = function (e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
        let preview = document.getElementById('preview');
        image = document.createElement('img');
        image.src = reader.result;
        images.style.width = "150px";
        preview.innerHTML = ";"
        preview.append(imagen);
    }
} 