import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './src/database';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import studentRoutes from './src/routes/studentRoutes';
import photoRoutes from './src/routes/photoRoutes';

// Configuração do Express.
// sempre que instanciar App serão chamados seus metodos.
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    /*
    - urlencoded analisa dados enviados  por formularios
    HTML, e os torna acessiveis no objeto req.body das
    rotas.
    - O parametro extended:true indica que o formato de dados
    analisado pode incluir objetos e arrays complexos.
    - é importante usar 'express.urlencoded' antes
    das rotas que precisam accesar dados do formulario.
    */

    this.app.use(express.urlencoded({ extended: true }));
    /*
    express.json analiza o corpo das request com conteudo
    JSON e os converte em um objeto JavaScript acessivel nas rotas do aplicativo.
    */

    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/students/', studentRoutes);
    this.app.use('/photos/', photoRoutes);
  }
}

export default new App().app;
