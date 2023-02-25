
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

//Importando model 
const HomeModel = require('../../models/HomeModel');

/**
 * NORMALMENTE NAO SE TRABALHA DESSE JEITO AQUI EMBAIXO, QUEM FAZ ESSE TRABALHO É O MODEL
 */



//criando documento no db... retorna uma promesa..em cada execução envia a info pro db
HomeModel.create({
    name: 'Anathov Orenil',
    age: 76
})
    .then(data => console.log(data))
    .catch( e => console.log(e));

//recuperando dados da db
HomeModel.find()
    .then(data => console.log('RECUPEREI OS DADOS PRA VC', data))
    .catch(e => console.log(e));


//exemplo middleware para rota e verbos globais

//rederisa pagina index na response
exports.paginaInicial = (req, res) =>{
    res.render('index');
    return;
};

//pasa o body da request na response
exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}