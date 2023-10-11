const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Group, Section, Upgrade, Change,
    }) {
      this.belongsTo(Group, { foreingKey: 'gId' });
      this.belongsTo(Section, { foreingKey: 'sId' });
      this.hasMany(Change, { foreignKey: 'tId' });
      this.hasMany(Upgrade, { foreignKey: 'tId' });
    }
  }
  Task.init({
    sId: DataTypes.INTEGER,
    gId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
