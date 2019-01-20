const doctor = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('doctor', {
    doctorID: {
      type: DataTypes.INTEGER,
      unique: true
    },
    name: DataTypes.STRING
  });

  Doctor.associate = (models) => {
    // Doctor.hasMany(models.Patient, {
    //     foreignKey: "patientID",
    // });
    Doctor.hasMany(models.Medication, {
      foreignKey: 'medicationID'
    });
  };

  return Doctor;
};

export default doctor;
