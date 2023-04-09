import express from "express";

const router = express.Router()

router.get('/', function(req, res){
    res.send('Hola En Express')
})

router.get('/nosotros', function(req, res){
    res.json({msg: 'Hola Desde Nosotros En Express'})
})

export default router