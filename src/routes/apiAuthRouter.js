import { Router } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const apiAuthRouter = Router();

apiAuthRouter.post('/signup', async (req, res) => {
  console.log(req.body);
  const { name, email, pass } = req.body;
  if (!name || !email || !pass) {
    res.sendStatus(400).json();
    // { message: 'all fields required' }
    return;
  } const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: {
      name,
      pass: await bcrypt.hash(pass, 10),
    },
  });
  if (!created) {
    res.sendStatus(400).json({ message: 'email exists' });
  }
  req.session.user = {
    name: user.name,
    email: user.email,
    id: user.id,
  };
  res.sendStatus(200);
});

apiAuthRouter.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: 'all fields required' });
    return;
  }

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user || !await bcrypt.compare(password, user.password)) {
    res.status(400).json({ message: 'user not found' });
    return;
  }
  req.session.user = {
    name: user.name,
    email: user.email,
    id: user.id,
  };
  res.sendStatus(200);
});

export default apiAuthRouter;
