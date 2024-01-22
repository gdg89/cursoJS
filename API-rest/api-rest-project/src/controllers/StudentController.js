import Student from '../models/student';
import Photo from '../models/photos';

class StudentController {
  async create(req, res) {
    try {
      const newStudent = await Student.create(req.body);
      const { name, age, email } = newStudent;
      return res.json({ name, age, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const students = await Student.findAll({
        attributes: ['id', 'name', 'lastname', 'email', 'age', 'weight', 'height'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['originalname', 'filename', 'url'],
        },
      });
      return res.json(students);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const student = await Student.findByPk(id, {
        attributes: ['id', 'name', 'lastname', 'email', 'age', 'weight', 'height'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['originalname', 'filename', 'url'],
        },
      });

      if (!student) {
        return res.status(400).json({
          errors: ['Stuident does not exist'],
        });
      }

      return res.status(200).json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exist'],
        });
      }

      const newData = await student.update(req.body);

      return res.status(200).json(newData);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exist'],
        });
      }

      await student.destroy();
      return res.status(200).json('User delete');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

/*
 vou exportar a classe já instanciada
 pra nao ter que instanciarla sempre que chamar ela.
*/
export default new StudentController();
