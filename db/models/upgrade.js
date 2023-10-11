const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Upgrade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Task }) {
      this.belongsTo(Task, { foreingKey: 'tId' });
    }
  }
  Upgrade.init({
    tId: DataTypes.INTEGER,
    desc: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Upgrade',
  });
  return Upgrade;
};
