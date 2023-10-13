import express from 'express';

const authRouter = express.Router();

authRouter.get('/signup', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

authRouter.get('/signin', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

export default authRouter;
