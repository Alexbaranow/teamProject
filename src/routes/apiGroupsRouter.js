import express from 'express';
import session from 'express-session';

const apiGroupsRouter = express.Router();

apiGroupsRouter.post('/', async (req, res) => {
  console.log(req.body);

    console.log(session);
  res.sendStatus(200);
});


export default apiGroupsRouter;
