/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('photos', 'uapdate_at', 'updated_at');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('photos');
  },
};
