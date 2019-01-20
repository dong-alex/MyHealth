const patient = (sequelize, DataTypes) => {
  const Patient = sequelize.define('patient', {
    patientID: {
      type: DataTypes.INTEGER,
      unique: true
    },
    name: DataTypes.STRING
  });

  Patient.associate = (models) => {
    // Patient.hasOne(models.Doctor, {
    //   foreignKey: "doctorID",
    // });
    Patient.hasMany(models.Medication, {
      foreignKey: 'medicationID'
    });
  };

  return Patient;
};

export default patient;
