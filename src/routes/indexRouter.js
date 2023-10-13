import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = { hello: 'world' };
  res.render('Layout', initState);
});

router.get('/table', (req, res) => {
  const name = ['name1', 'name2', 'name3'];
  const initState = { hello: 'world', name };
  res.render('Layout', initState);
});
export default router;
