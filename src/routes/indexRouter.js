import express from 'express';
import { Section, Upgrade, Change } from '../../db/models';

const indexRouter = express.Router();

indexRouter.get('/table', async (req, res) => {
  try {
    const sections = await Section.findAll();
    const upgrades = await Upgrade.findAll({
      attributes: ['desc'],
      group: ['desc'],
      raw: true,
    });

    // Извлекаем все уникальные значения столбца 'desc' из модели Change
    const changes = await Change.findAll({
      attributes: ['desc'],
      group: ['desc'],
      raw: true,
    });

    // console.log(sections, 'UPGRADES:', upgrades, 'CHANGES:', changes);

    const names = sections.map((section) => JSON.stringify(section.name));

    const initState = {
      hello: 'world',
      names,
      upgrades,
      changes,
    };

    res.render('Layout', initState);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

export default indexRouter;
