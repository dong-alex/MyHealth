import express from 'express';
import { sequelize } from '../models';
import Patients from '../controllers/patient';
import Medications from '../controllers/medication';

const app = express();
const port = 8081;
const eraseDatabaseOnSync = true;

// ---- get requests ----

// medications
app.get('/api/medications', Medications.getAllMedications);
//app.get('/api/patients', Patients.getAllMedications);
// ---- post requests ----

// patients
app.post('/api/patients', Patients.signUp);
app.get('/api/patients', Patients.logIn);
app.post('/api/postDummyPatients', Patients.postDummyData);

// medications
app.post('/api/postDummyMedications', Medications.postDummyData);
app.post('/api/add-medication', Medications.addMedication);

sequelize.sync({ force: eraseDatabaseOnSync }).then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    // setup dummy data
    Medications.postDummyData();
    Patients.postDummyData();

  });
});
