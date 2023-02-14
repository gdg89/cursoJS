const express = require('express');
const app = express();
//importando rotas
const routes = require('./routes');


//tratando o body do POST/PUT
app.use(express.urlencoded({extended:true}));

//usando rotas
app.use(routes);

//adicionando listener de porta pro servidor, e pasando messagem.
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando na porta 3000');
});

