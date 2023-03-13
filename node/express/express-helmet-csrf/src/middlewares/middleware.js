exports.mymiddleware = (req, res, next) => {
    //injetando conteudo pra todas as rotas
    res.locals.variableExample = "Variable middleware"; 
    next();
}

exports.othermiddleware = (req, res, next) => {
    next();
}

//check token csrf
exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' ===  err.code){
        return res.render('404');
    }
}

//csrf token for all pages
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();//token csrf
    next();
}