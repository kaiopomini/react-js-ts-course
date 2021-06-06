import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const newAluno = await Aluno.create({
      name: 'Maria',
      surname: 'Miranda',
      email: 'mariamiranda@teste.com',
      age: 25,
      weight: 55,
      height: 1.65,
    });
    res.json(newAluno);
  }
}

export default new HomeController();
