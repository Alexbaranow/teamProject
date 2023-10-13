import express from 'express';

const reportsRouter = express.Router();

reportsRouter.get('/', async (req, res) => {
  try {
    res.render('Layout');
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error' });
  }
});

export default reportsRouter;
