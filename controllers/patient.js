import { sequelize } from '../models';

const Patient = sequelize.import('../models/patient');

class Patients {
  static signUp(req, res) {
    // console.log(req.query.name);
    // const { name } = req.query.name;
    // console.log(name);
    return Patient.create({
      name: req.query.name,
    })
      .then(userData => res.status(201).send({
        success: true,
        message: 'Patient successfully created',
        userData,
      }));
  }
}
export default Patients;
