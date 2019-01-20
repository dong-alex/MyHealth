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
}
export default Patients;
