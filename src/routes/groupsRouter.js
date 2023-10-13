import express from 'express';

import { Group } from '../../db/models';

const groupsRouter = express.Router();

groupsRouter.get('/', async (req, res) => {
  try {
    const groups = await Group.findAll();
    res.render('Layout', { groups });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error' });
  }
});

groupsRouter.get('/', async (req, res) => {
  res.render('Layout', { });
});

export default groupsRouter;
