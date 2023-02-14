const express = require('express');
const app = express();

//CRUD -> CREATE, READ, UPDATE, DELETE
//metodos: POST   GET    PUT    DELETE

//http://meusite.com/ <- requisição GET -> Entregue a pagina / (home).

//http://meusite.com/about <- requisição GET -> Entregue a pagina /about.

//http://meusite.com/contact <- requisição GET -> Entregue a pagina /contact.

//pasando nome da request, e função com a resposta
app.get('/', (request, response) =>{
    response.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"><br>
    <input type="checkbox" name="like"> I like it<br>
    <input type="checkbox" name="dont-like"> I don´t like it<br>
    <button tpye="send">Send</button>
    </form>
    `);
});

//criando nova rota
app.get('/contact', (req, res) =>{
    res.send('Thakns for getting in touch!');
});

app.post('/', (request, response) =>{
    response.send('Received form');
});

//adicionando listener de porta pro servidor, e pasando messagem.
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando na porta 3000');
});

