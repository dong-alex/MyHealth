import express from 'express';
import { sequelize } from '../models';
import Patients from "../controllers/patient";

const app = express();
const port = 8081;

app.post('/api/patients', Patients.signUp);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });
});
