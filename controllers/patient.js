import { sequelize } from '../models';

// const Medication = sequelize.import('../models/medication');
// const Medications = sequelize.import('../models/medication');
const Patient = sequelize.import('../models/patient');

class Patients {
  static signUp(req, res) {
    return Patient.create({
      name: req.query.name,
      patientID: req.query.id
    })
      .then(userData => res.status(201).send({
        success: true,
        message: 'Patient successfully created',
        userData
      }));
  }

  static logIn(req, res) {
    console.log(req.query);
    return Patient.findOne({
      where: {
        patientID: req.query.id
      }
    })
      .then(userData => res.status(201).send({
        success: userData ? 'User Found' : 'User not found',
        userData
      }));
  }

  static postDummyData() {
    let i;
    for (i = 1; i < 10; i += 1) {
      Patient.create({
        name: 'Chaitali'
      });
    }
    return 1;
  }
}

export default Patients;
