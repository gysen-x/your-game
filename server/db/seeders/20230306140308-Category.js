/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [{
      name: 'Фильмы',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Автомобили',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Рок-н-ролл',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Природа',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Космос',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Компьютер',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
