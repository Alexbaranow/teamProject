/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Anton',
        email: 'anton@fox.com',
        pass: '321qeq',
        gId: 1,
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Masha',
        email: 'masha@fox.com',
        pass: '321qqq',
        gId: 1,
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sasha',
        email: 'sasha@juk.com',
        pass: '123qeq',
        gId: 2,
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lerochka<3',
        email: 'leron@lev.com',
        pass: '123www',
        gId: 2,
        isAdmin: false,
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
