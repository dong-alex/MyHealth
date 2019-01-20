const doctor = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('doctor', {
    doctorID: {
      type: DataTypes.INTEGER,
<<<<<<< HEAD
      unique: true,
      primaryKey: true
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

=======
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

>>>>>>> 2618bd280ce0ce38a92f973ac062c2381b1e2771
  return Doctor;
};

export default doctor;
