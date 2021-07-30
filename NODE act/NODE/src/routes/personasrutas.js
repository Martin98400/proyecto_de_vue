const express = require('express');

const routes = express.Router();

const {listar, optenerboardgamesid, agregar, editar, eliminar} = require ('../controllers/personascontroller')

routes.get('/boardgames', listar);

routes.get('/boardgames/:id',optenerboardgamesid);

routes.post('/boardgames/agregar',agregar);

routes.put('/boardgames/editar',editar);

routes.delete('/boardgames/eliminar',eliminar);
module.exports = routes;