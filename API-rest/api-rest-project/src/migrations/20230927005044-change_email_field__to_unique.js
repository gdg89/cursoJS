/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'students',
      'email',
      {
        type: Sequelize.STRING,
        allownull: false,
        unique: true,
      },
    );
  },
};
