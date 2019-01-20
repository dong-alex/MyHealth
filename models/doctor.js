const doctor = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('doctor', {
    doctorID: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  });

  // Doctor.associate = (models) => {
  //   Doctor.hasMany(models.Patient, {
  //     foreignKey: 'doctorID'
  //   });
  //   Doctor.hasMany(models.Medication, {
  //     foreignKey: 'doctorID'
  //   });
  // };

  return Doctor;
};

export default doctor;
