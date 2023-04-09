// const express = require('express')  Common JS
import express from 'express'

//Crear la App:
const app = express()

//Routing:
app.get('/', function(req, res){
    res.send('Hola En Express')
})

app.get('/nosotros', function(req, res){
    res.json({msg: 'Hola Desde Nosotros En Express'})
})

//Definir un puerto y arrancar el proyecto
const PORT = 3000

app.listen(PORT, ()=> {
    console.log(`El servidor esta corriendo en el puerto: ${PORT}`);
})