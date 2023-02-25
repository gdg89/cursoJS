//exemplo middleware para rota e verbos globais
exports.paginaInicial = (req, res) =>{
    //pasando dado pra session
    req.session.user = {name: 'Giuliano', login: true, message: 'esto dura 7 dias guardado'};
    console.log(req.session.user);

    //pasando flash messages
            // nome    message
    req.flash('info','HELLO WORLD');
    req.flash('error','Oops something´s wrong');
    req.flash('success','hi! i hope you are well');

    console.log(req.flash('info'), req.flash('error'), req.flash('success'));

   
    res.render('index');
    return;
};


exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}