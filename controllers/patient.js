import { sequelize } from '../models';

const Patient = sequelize.import('../models/patient');

class Patients {
  static signUp(req, res) {
    return Patient.create({
      name: req.query.name,
    })
      .then(userData => res.status(201).send({
        success: true,
        message: 'Patient successfully created',
        userData,
      }))
      .catch(err => res.status(404).send({
        success: false,
        message: err,
      }));
  }
}
export default Patients;
