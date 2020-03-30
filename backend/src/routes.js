const express = require("express");
const { OngController, IncidentController, ProfileController, SessionController } = require("./controllers");

const routes = express.Router();


routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profiles', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);




module.exports = routes