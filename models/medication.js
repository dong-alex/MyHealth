const medication = (sequelize, DataTypes) => {
  const Medication = sequelize.define('medication', {
    medicationID: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    date: DataTypes.DATEONLY,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    dosage: DataTypes.STRING,
    lastTaken: DataTypes.TIME
  });
  Medication.associate = (models) => {
    Medication.belongsToMany(models.Patient, {
      through: 'PatientMedication',
      foreignKey: 'medicationID'
    });
  };

  return Medication;
};

export default medication;
