const express = require('express');
const route = express.Router();
//importando cotroller
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

//o paramtero next deve ser llmado para executar o porximo middleware.
//exemplos de middleware para aplicar em rota e verbos especificos.
function myMiddleware(req, res, next){
    //salvando na seção de usuario.
    req.session = {name: 'Giuliano', lastName: 'García'};

    console.log();
    console.log('I went through your first middleware');
    console.log();
    next();
}

function mySecondMiddleware(req, res, next){
    console.log();
    console.log('I am your second middleware, executed after homeController');
    console.log(`User session data, name:${req.session.name}, last name:${req.session.lastName}`);
    console.log();
    next();
}

// rotas da home
//exemplo middleware para rota especifica e verbo especifico
//route.get('/', myMiddleware, homeController.paginaInicial, mySecondMiddleware);

//middleware para rotas globais e todos os verbos
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//contact routes
route.get('/contact', contactController.contactPage);
route.post('/contact', contactController.contactResposta);
//exportando rota
module.exports = route;