const { async } = require('regenerator-runtime');
const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
}

exports.register = (req, res) => {
    res.render('register');
}

//como o metodo newRegister é uma promise aqui devo trabalhar com async await tambem
exports.newUser = async (req, res) => {
    try {
        //req.body recebe informação do formulario.
        const login = new Login(req.body);
        //metodo new register da classe login do model
        await login.newRegister();

        //exibindo errors na tela 
        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            //salvando session
            req.session.save(function () {
                return res.redirect('/register');
            });
            return;
        }

        //message de sucesso
        req.flash('success', 'Ususario criado com sucesso');
        //salvando session
        req.session.save(function () {
            return res.redirect('/register');
        });

    }catch(e){
        console.log(e);
        return res.render('404');
    }
}


exports.login = async (req, res) => {
    try{
        const login = new Login(req.body);
        await login.login();

        //exibindo errors na tela 
        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            //salvando session
            req.session.save(function () {
                return res.redirect('/login');
            });
            return;
        }

        //session de usuario
        req.session.user = login.user;
        req.session.save(function(){
        return res.redirect('/schedule');
        });
    }catch(e){
        console.log(e);
        return res.render('404');
    }
}

exports.logout = (req, res) => {
    req.session.destroy();
    return res.redirect('/');
}