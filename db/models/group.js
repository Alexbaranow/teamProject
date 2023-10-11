const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Task, Section }) {
      this.hasMany(User, { foreignKey: 'gId' });
      this.hasMany(Task, { foreignKey: 'gId' });
      this.hasMany(Section, { foreignKey: 'gId' });
    }
  }
  Group.init({
    groupName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};
