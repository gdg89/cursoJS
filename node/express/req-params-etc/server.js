const express = require('express');
const app = express();

//tratando o body do POST/PUT
app.use(express.urlencoded({extended:true}));


//pasando nome da request, e função com a resposta
app.get('/', (request, response) =>{
    response.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"><br>
    <input type="checkbox" name="like"> I like it<br>
    <input type="checkbox" name="dontlike"> I don´t like it<br>
    <button tpye="send">Send</button>
    </form>
    `);
});

//reposta cuando enviamos o form pelo POST
//e recuperando dados com request.body
app.post('/', (request, response) =>{
    console.log(request.body);
    response.send(`O seu nome é ${request.body.nome}, e o pai ta ${request.body.like}`);
});

//adicionando listener de porta pro servidor, e pasando messagem.
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando na porta 3000');
});

//PARAMS
//#########

//Criando nova rota com parametros ex /:idUsuarios
// - declarar o parametro sem interrogação torna
// ele obligatorio, ou seja nao posso accesar
// a /testes sem pasar parametro, para que ele seja
// opcional declaro o parametro com interrogação no final.
//                      p        p   
//URL example: /testes/12351/outroPArametro

app.get('/testes/:idUsuarios?/:novoParametro?', (request, response) =>{
    //logando params
    console.log(request.params);
    //pasando os parametros na resposta
    response.send(request.params);

    //logando query string
    console.log(request.query.mastreco);
    response.send(request.query.mastreco);
});

//Query String
//são pasado pela URL dese jeito ex /queryString/?nome=Giuliano&sobrenome=Garcia&idade=33...

app.get('/queryString', (request, response) =>{
    //logando query string
    console.log(request.query);
    response.send(request.query);
})

