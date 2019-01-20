import express from 'express';
import { sequelize } from '../models';

const app = express();
const port = 3000;

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });
});
