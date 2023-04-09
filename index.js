// const express = require('express')  Common JS
import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'

//Crear la App:
const app = express()

//Routing:
app.use('/', usuarioRoutes)

//Definir un puerto y arrancar el proyecto
const PORT = 3000

app.listen(PORT, ()=> {
    console.log(`El servidor esta corriendo en el puerto: ${PORT}`);
})