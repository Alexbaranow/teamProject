import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const indexRouter = express.Router();

indexRouter.post('/', async (req, res) => {
  const { email, pass } = req.body;
  if (!email || !pass) {
    res.status(400).json({ message: 'все поля обязательны к заполнению' });
    return;
  }

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user || !await bcrypt.compare(pass, user.pass)) {
    res.status(400).json({ message: 'неверный логин или пароль' });
    return;
  }
  req.session.user = {
    name: user.name,
    email: user.email,
    id: user.id,
  };
  res.sendStatus(200);
});

indexRouter.get('/', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

export default indexRouter;
