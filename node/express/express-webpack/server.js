const express = require('express');
const app = express();
//importando rotas
const routes = require('./routes');
//caminho absoluto
const path = require('path');


//tratando o body do POST/PUT
app.use(express.urlencoded({extended:true}));
//renderizando conteudo statico da pasta public
app.use(express.static(path.resolve(__dirname, 'public')));


//renderizando views
app.set('views', path.resolve(__dirname, 'src', 'views'));
//pasando view engine(instalar ejs via npm)
app.set('view engine', 'ejs');



//usando rotas
app.use(routes);

//adicionando listener de porta pro servidor, e pasando messagem.
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando na porta 3000');
});

