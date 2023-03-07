//chamando dotenv (criar arquivo .env)
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// conxão com data base
mongoose.set('strictQuery', false);
                //chamadno connectionstring do .env
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('DB connected');
        //app emite um sinal "pronto", quando a  conexão for realizada(ver app.on mais embaixo)
        app.emit('pronto');
    })
    .catch( e => console.log('Oops! somethings wrong', e));

//chamando session
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

//importando rotas
const routes = require('./routes');
//caminho absoluto
const path = require('path');
//importando middleware
const  { mymiddleware } = require('./src/middlewares/middleware');


//tratando o body do POST/PUT
app.use(express.urlencoded({ extended: true }));
//renderizando conteudo statico da pasta public
app.use(express.static(path.resolve(__dirname, 'public')));

//SESSION CONFIG
const sessionOptions = session({
    //cookie de sessão é assinado com este segredo para evitar adulteração
    secret: process.env.SESSIONSECRET,
    //instância de armazenamento de sessão
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized:false,
    //pasando tempo que vai durar a cookie(nesse caso 7 dias);
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

//usando session
app.use(sessionOptions);
//usando flash
app.use(flash());


//renderizando views
app.set('views', path.resolve(__dirname, 'src', 'views'));
//pasando view engine(instalar ejs via npm)
app.set('view engine', 'ejs');


//usando middleware global da pasta middleware
app.use(mymiddleware);
//usando rotas
app.use(routes);

// quando conexão for realizada adiciona listener
app.on('pronto', () => {
    //adicionando listener de porta pro servidor, e pasando messagem.
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('servidor executando na porta 3000');
    });
})


