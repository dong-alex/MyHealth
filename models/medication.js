const medication = (sequelize, DataTypes) => {
    const Medication = sequelize.define('medication', {
        medicationID: {
            type: DataTypes.INTEGER,
            unique: true
        },
        date: DataTypes.DATEONLY,
        name: DataTypes.STRING,
        description: DataTypes.STRING
    });
    // Medication.associate = models => {
    //     Medication.hasOne(models.Doctor, {
    //         foreignKey: "doctorID",
    //     });
    //     Medication.hasOne(models.Patient, {
    //         foreignKey: "patientID",
    //     });
    // };
  
    return Medication;
  };
  
  export default medication;