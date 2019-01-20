import { sequelize } from '../models';

const Patients = sequelize.import('../models/patient');
const Medication = sequelize.import('../models/medication');

class Medications {
  static postDummyData(req, res) {
    try {
      let i = 0;
      for (i = 0; i < 10; i += 1) {
        Medication.create({
          medicationID: i,
          date: new Date(),
          name: 'Alex',
          description: 'dummy',
          dosage: '1 pill a day',
          lastTaken: new Date()
        });
      }
      return res.status(201).send({
        success: true,
        message: 'Successfully added patient data'
      });
    } catch (err) {
      return res.status(404).send({
        success: false,
        message: err
      });
    }
  }

  static getAllMedications(req, res) {
    return Medication.findAll({
      include: [{
        model: Patients,
        where: { patientID: req.query.patientID }
      }]
    })
      .then(userData => res.status(201).send({
        success: true,
        message: `Sucessfully obtained medication data for ${req.query.patientID}`,
        userData
      }));
  }
}
export default Medications;
