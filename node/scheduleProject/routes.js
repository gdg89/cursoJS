const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contactController = require('./src/controllers/contactController');

const { loginRequired } = require('./src/middlewares/globalsMiddlewares');

//home route
route.get('/', homeController.index);
//login routes
route.get('/login', loginController.index);
route.get('/register', loginController.register);
route.post('/register/newUser', loginController.newUser);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

//contact routes
route.get('/schedule', loginRequired, contactController.schedule);
route.get('/contact', loginRequired, contactController.index);
route.get('/contact/edit/:id', loginRequired, contactController.editIndex);
route.post('/contact/newContact', loginRequired, contactController.newContact);
route.post('/contact/editContact/:id', loginRequired, contactController.editContact);
route.get('/contact/delete/:id', loginRequired, contactController.contactDelete);

module.exports = route;