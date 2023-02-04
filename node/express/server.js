const express = require('express');
const app = express();

//CRUD -> CREATE, READ, UPDATE, DELETE
//metodos: POST   GET    PUT    DELETE

//http://meusite.com/ <- requisição GET -> Entregue a pagina / (home).

//http://meusite.com/about <- requisição GET -> Entregue a pagina /about.

//http://meusite.com/contact <- requisição GET -> Entregue a pagina /contact.

//pasando nome da request, e função com a resposta
app.get('/', (request, response) =>{
    response.send('Hello World!');
});

//adicionando listener de porta pro servidor
app.listen(3000);

