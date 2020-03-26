const express = require ('express');

const OngController = require('./controllers/OngController');
const IncidentOngController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionCrontroller');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentOngController.index);
routes.post('/incidents', IncidentOngController.create);
routes.delete('/incidents/:id', IncidentOngController.delete);

module.exports = routes;