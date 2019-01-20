const patient = (sequelize, DataTypes) => {
  const Patient = sequelize.define('patient', {
    patientID: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  });

  Patient.associate = (models) => {
    Patient.belongsToMany(models.Medication, {
      through: 'PatientMedication',
      foreignKey: 'patientID'
    });
  };

  return Patient;
};

export default patient;
