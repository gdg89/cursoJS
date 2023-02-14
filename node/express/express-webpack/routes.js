const express = require('express');
const route = express.Router();
//importando cotroller
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

// rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//contact routes
route.get('/contact', contactController.contactPage);
route.post('/contact', contactController.contactResposta);
//exportando rota
module.exports = route;