import { Router } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const apiAuthRouter = Router();

apiAuthRouter.post('/signup', async (req, res) => {
  console.log(req.body);
  const { name, email, pass } = req.body;
  if (!name || !pass || !email) {
    res.statusCode(400).json({ message: 'все поля обязательны к заполнению' });
    return;
  } const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: {
      name,
      pass: await bcrypt.hash(pass, 10),
    },
  });
  if (!created) {
    res.statusCode(400).json({ message: 'такой email уже зарегистрирован' });
  }
  req.session.user = {
    name: user.name,
    email: user.email,
    id: user.id,
  };
  res.sendStatus(200);
});

apiAuthRouter.get('/signup', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  });

export default apiAuthRouter;
