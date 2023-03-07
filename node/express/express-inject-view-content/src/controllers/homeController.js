//exemplo middleware para rota e verbos globais
exports.paginaInicial = (req, res) =>{
                        //injetando dados no template index.ejs, serão capturados lá.  
    res.render('index', {
        title: 'Page  <span style = "color: green">title1</span>',
        title2: 'Page  <span style = "color: green">title2</span>',
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
};


exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}