import express from 'express';
import { sequelize } from '../models';
import Patients from "../controllers/patient";
import Medications from "../controllers/medication";

const app = express();
const port = 8081;

// ---- get requests ----

// medications
app.get('/api/medications', Medications.getAllMedications);

// ---- post requests ----

// patients
app.post('/api/patients', Patients.signUp);
app.get('/api/patients', Patients.logIn);

// medications
app.post('/api/postDummyData', Medications.postDummyData);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });
});
