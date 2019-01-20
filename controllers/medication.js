import { sequelize } from '../models';

const Patient = sequelize.import('../models/patient');
const Medication = sequelize.import('../models/medication');

class Medications {
  static postDummyData() {
    let i;
    for (i = 1; i < 10; i += 1) {
      Medication.create({
        date: new Date(),
        name: 'Alex',
        description: 'dummy',
        dosage: '1 pill a day',
        lastTaken: new Date(),
        patientID: i % 3
      }, {
        include: Patient
      });
    }
  }

  static getAllMedications(req, res) {
    return Medication.findAll({
      include: [{
        model: Patient,
        where: { patientID: req.query.patientID }
      }]
    })
      .then(userData => res.status(201).send({
        success: true,
        message: `Sucessfully obtained medication data for ${req.query.patientID}`,
        userData
      }));
  }

  static addMedication(req, res) {
    // find the patient
    console.log(req.query.patientID);
    return Patient.findById(req.query.patientID, {
      include: [{
        model: Medication
      }]
    })
      .then((patient) => {
        if (!patient) {
          return res.status(404).send({
            message: 'Patient not found'
          });
        }
        Medication.create({
          date: new Date(),
          name: 'Kynan',
          description: 'addMedication',
          dosage: 'two pills a day',
          lastTaken: new Date()
        })
          .then((medication) => {
            patient.addMedication(medication);
          });
        return res.status(200).send({
          message: 'Successful medication addition for patient'
        });
      })
      .catch((error) => {
        res.status(400).send(error);
      });
    // return Medication.create({
    //   date: new Date(),
    //   name: 'Kynan',
    //   description: 'dummy',
    //   dosage: '1 pill a day',
    //   lastTaken: new Date(),
    //   patientID: req.query.id
    // })
    //   .then(userData => res.status(201).send({
    //     success: true,
    //     message: 'Medication successfully added',
    //     userData
    //   }));
  }
}
export default Medications;
