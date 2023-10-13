/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sections', [
      {
        name: 'MainPage',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Login',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Network',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
