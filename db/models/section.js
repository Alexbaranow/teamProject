const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Group, Task }) {
      this.belongsTo(Group, { foreingKey: 'gId' });
      this.hasMany(Task, { foreignKey: 'tId' });
    }
  }
  Section.init({
    name: DataTypes.STRING,
    gId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Section',
  });
  return Section;
};
