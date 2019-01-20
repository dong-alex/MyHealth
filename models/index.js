import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'healthdb',
  'postgres',
  'admin',
  {
    dialect: 'postgres'
  },
);

const models = {
  Patient: sequelize.import('./patient'),
  Doctor: sequelize.import('./doctor'),
  Medication: sequelize.import('./medication')
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
