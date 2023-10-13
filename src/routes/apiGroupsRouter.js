import express from 'express';
import { User } from '../../db/models';

const apiGroupsRouter = express.Router();

apiGroupsRouter.post('/', async (req, res) => {
  const idGroup = req.body.select;
  const data = req.session.user;

  await User.update(
    { gId: idGroup, isAdmin: false },
    { where: { id: data.id } },
  );
  res.sendStatus(200);
});

export default apiGroupsRouter;
