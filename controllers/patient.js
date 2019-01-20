import { sequelize } from '../models';

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
<<<<<<< HEAD
        userData,
      }))
      .catch(err => res.status(404).send({
        success: false,
        message: err,
=======
        userData
      }));
  }

  static logIn(req, res) {
    return Patient.findOne({
      where: {
        patientID: req.query.id
      }
    })
      .then(userData => res.status(201).send({
        success: userData ? 'User Found' : 'User not found',
        userData
>>>>>>> 2618bd280ce0ce38a92f973ac062c2381b1e2771
      }));
  }
}
export default Patients;
