require('dotenv').config();

const path = require('path');
const routes = require('./routes');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');



//DB connect
mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('connected');
    })
    .catch(e => console.log('Ooops! somethings wrong', e));

//STATIC CONTENT
app.use(express.static(path.resolve(__dirname, 'public')));

//SESSION CONFIG
const sessionOptions = session({
    secret: process.env.SESSIONSECRET,
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly:true
    }
});

app.use(sessionOptions);
app.use(flash());
app.use(helmet());
app.use(csrf());
app.use(routes);
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');



app.on('connected', () => {
    app.listen(3000, () => {
        console.log('server running on http://localhost:3000');
    })
})