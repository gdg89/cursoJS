
exports.paginaInicial = (request, response) =>{
    response.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"><br>
    <input type="checkbox" name="like"> I like it<br>
    <input type="checkbox" name="dontlike"> I don´t like it<br>
    <button tpye="send">Send</button>
    </form>
    `);

};

exports.trataPost = (request, response) => {
    response.send('Ei Sou SUa Nova RotA De PosT');
}