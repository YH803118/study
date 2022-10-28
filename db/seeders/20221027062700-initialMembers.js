'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Members', [
    {
      id: 1,
      name: 'alex',
      team: 'engineering',
      admissionDate: '2018/12/19',
  },
  {
      id: 2,
      name: 'mis',
      team: 'engineering',
      admissionDate: '2018/10/19',
  },
  {
      id: 3,
      name: 'ron',
      team: 'non-engineering',
      admissionDate: '2019/1/19',
  },
  {
      id: 4,
      name: 'rinkin',
      team: 'non-engineering',
      admissionDate: '2018/9/19',
  }
   ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Members', null, {});
  }
};
