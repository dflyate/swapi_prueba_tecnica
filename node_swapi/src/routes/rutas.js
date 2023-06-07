const router = require('express').Router();
const productoController = require('../controller/productoController')
const swapiController = require('../controller/swapiController')

// rutas para base de datos

router.get('/productos', productoController.listar);

router.get('/productos/:id', productoController.obtenerPorId);

router.post('/productos', productoController.insertar)


//rutas para consulta SWAPI

router.get('/swapi', swapiController.listar);

router.get('/swapi/personas/:id', swapiController.buscarPersona);

router.get('/swapi/peliculas/:id', swapiController.buscarPelicula);

router.get('/swapi/naves/:id', swapiController.buscarNave);

router.get('/swapi/planetas/:id', swapiController.buscarPlaneta);



module.exports = router;