class HomeController {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

/*
 vou exportar a classe já instanciada
 pra nao ter que instanciarla sempre que chamar ela.
*/
export default new HomeController();
