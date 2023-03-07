exports.mymiddleware = (req, res, next) => {
    //injetando conteudo pra todas as rotas
    res.locals.variableExample = "Variable middleware"; 
    next();
}

exports.othermiddleware = (req, res, next) => {
    next();
}