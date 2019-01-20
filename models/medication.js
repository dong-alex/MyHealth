const medication = (sequelize, DataTypes) => {
  const Medication = sequelize.define('medication', {
    medicationID: {
      type: DataTypes.INTEGER,
<<<<<<< HEAD
      unique: true,
      primaryKey: true
    },
    date: DataTypes.DATEONLY,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    dosage: DataTypes.STRING,
    lastTaken: DataTypes.TIME
=======
      unique: true
    },
    date: DataTypes.DATEONLY,
    name: DataTypes.STRING,
    description: DataTypes.STRING
>>>>>>> 2618bd280ce0ce38a92f973ac062c2381b1e2771
  });
  // Medication.associate = (models) => {
  //   // Medication.belongsToMany(models.Patient, {
  //   //   through: 'PatientMedication'
  //   // });
  // };

  return Medication;
};

export default medication;
