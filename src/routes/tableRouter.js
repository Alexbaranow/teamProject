import express from 'express';

const tableRouter = express.Router();

tableRouter.get('/', (req, res) => {
  const initState = { hello: 'world' };
  res.render('Layout', initState);
});



export default tableRouter;
