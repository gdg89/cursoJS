import Student from '../models/student';

class HomeController {
  async index(req, res) {
    res.json('Home');
  }
}

/*
 vou exportar a classe já instanciada
 pra nao ter que instanciarla sempre que chamar ela.
*/
export default new HomeController();
