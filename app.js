const express = require("express");
const app = express();

// modulo nativo para manejar las rutas de los archivos//
const path = require ("path");

// recursos estaticos //
app.use (express.static (path.resolve(__dirname, "./public")));

app.listen (process.env.PORT || 3055, () =>{
    console.log ("Servidor corriendo en http://localhost:3055")
});

app.get ("/",(req , res) =>{
    res.sendFile (path.resolve (__dirname, "./views/index.html"))
} );