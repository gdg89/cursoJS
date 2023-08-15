import express from 'express';
import homeRoutes from './src/routes/homeRoutes';

// Configuraçãodo Express.
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
  }

  routes() {
    this.app.use('/', homeRoutes);
  }
}

export default new App().app;
