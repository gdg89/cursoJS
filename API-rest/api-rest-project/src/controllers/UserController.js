import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, name, email } = newUser;
      return res.json({ id, name, email });
    } catch (e) {
      // com um console.log(e) e possivel ver o errors e a messages, para entender da onde vem.
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] }); // recuperando atributos especificos comoid etc.
      console.log('User ID ', req.userId);// obtendo dados do usuario logado atraves do token enviado no header(ver middleware Login)
      console.log('User email', req.userEmail);// obtendo dados do usuario logado atraves do token enviado no header (ver middleware Login)
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // show- mostra usuario logado
  async show(req, res) {
    try {
      const user = await User.findByPk(req.userId);// Pk = primary key
      const { id, name, email } = user;
      return res.json({ id, name, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      // Pasamos userID porque usuario so pode editar os propios dados.
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist'],
        });
      }

      const newData = await user.update(req.body);
      const { id, name, email } = newData;

      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      // if (!req.params.id) {
      //   return res.status(400).json({
      //     errors: ['Missing ID'],
      //   });
      // }

      // Pasamos userID porque usuario so pode deletar os propios dados.
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist'],
        });
      }

      await user.destroy();
      return res.json('User delete');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
