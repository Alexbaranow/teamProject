import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const State = 'privet';
  const initState = { State };
  res.render('Layout', initState);
});

router.get('/table', (req, res) => {
  const names = ['name1', 'name222222222', 'name3'];
  const section = ['oneText', 'twoText', 'threeText'];
  const commit = ['oneCommit', 'twoCommit', 'threeCommit'];
  const initState = {
    hello: 'world', names, section, commit,
  };
  res.render('Layout', initState);
});

export default router;
