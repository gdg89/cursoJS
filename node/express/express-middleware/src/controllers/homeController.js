
/**
 *exepmlo middleware pra rota especifica

 *  exports.paginaInicial = (req, res, next) =>{
    res.render('index');
    console.log('I rendered your home page');
    console.log(`User session data, name:${req.session.name}, last name:${req.session.lastName}`);
    next();
};
 *
 */

//exemplo middleware para rota e verbos globais
exports.paginaInicial = (req, res) =>{
    res.render('index');
    return;
};


exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}