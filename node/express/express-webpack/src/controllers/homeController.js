
exports.paginaInicial = (request, response) =>{
    response.render('index');

};

exports.trataPost = (request, response) => {
    response.send('Ei Sou SUa Nova RotA De PosT');
}