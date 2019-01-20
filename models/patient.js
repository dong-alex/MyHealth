const patient = (sequelize, DataTypes) => {
  const Patient = sequelize.define('patient', {
    patientID: {
      type: DataTypes.INTEGER,
<<<<<<< HEAD
      unique: true,
      primaryKey: true
=======
      unique: true
>>>>>>> 2618bd280ce0ce38a92f973ac062c2381b1e2771
    },
    name: DataTypes.STRING
  });

  Patient.associate = (models) => {
    // Patient.hasOne(models.Doctor, {
    //   foreignKey: "doctorID",
    // });
    Patient.hasMany(models.Medication, {
<<<<<<< HEAD
      foreignKey: 'prescriptionID'
=======
      foreignKey: 'medicationID'
>>>>>>> 2618bd280ce0ce38a92f973ac062c2381b1e2771
    });
  };

  return Patient;
};

export default patient;
