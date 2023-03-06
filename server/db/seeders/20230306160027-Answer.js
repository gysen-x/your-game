/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [{
      text: 'Эпизод IV: Новая надежда',
      questionId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Майкл Дж. Фокс',
      questionId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Макс Рокатански',
      questionId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Джокер',
      questionId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Паразиты',
      questionId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Безумный океан',
      questionId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Вивиан Уорд',
      questionId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Обыкновенные люди',
      questionId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Пиноккио',
      questionId: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Джек и роза',
      questionId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: '1926',
      questionId: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: '1200',
      questionId: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Porsche AG',
      questionId: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Ford Model T',
      questionId: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Toyota Corolla',
      questionId: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: '489',
      questionId: 16,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Rolls-Royce',
      questionId: 17,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Volkswagen Beetle',
      questionId: 18,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'AMC Eagle',
      questionId: 19,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Bugatti Chiron Super Sport 300+',
      questionId: 20,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: '1968',
      questionId: 21,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Фредди Меркьюри',
      questionId: 22,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Гитара',
      questionId: 23,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'High Voltage',
      questionId: 24,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'The Dark Side of the Moon',
      questionId: 25,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Led Zeppelin',
      questionId: 26,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Ринго Старр',
      questionId: 27,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Аксель Роуз',
      questionId: 28,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Highway to Hell',
      questionId: 29,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Cream',
      questionId: 30,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Эверест',
      questionId: 31,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Испарение',
      questionId: 32,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Фотосинтез',
      questionId: 33,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Амазонка',
      questionId: 34,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Еловый лес',
      questionId: 35,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Рукокрылые',
      questionId: 36,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Окисление',
      questionId: 37,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Транспорт в растениях',
      questionId: 38,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Синий кит',
      questionId: 39,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Эрозия',
      questionId: 40,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Меркурий',
      questionId: 41,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Титан',
      questionId: 42,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Юпитер',
      questionId: 43,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Викинг-1',
      questionId: 44,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Млечный путь',
      questionId: 45,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Склероскопия',
      questionId: 46,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Ганимед',
      questionId: 47,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Ганимед',
      questionId: 48,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Радиоволны',
      questionId: 49,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Гравитационный маневр',
      questionId: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Central Processing Unit',
      questionId: 51,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Многозадачность',
      questionId: 52,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'оперативная память компьютера',
      questionId: 53,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'ATX',
      questionId: 54,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Wi-Fi',
      questionId: 55,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Графический процессор компьютера',
      questionId: 56,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Твердотельный накопитель',
      questionId: 57,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Твердотельный накопитель',
      questionId: 58,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Система базового ввода/вывода',
      questionId: 59,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'Облачные технологии',
      questionId: 60,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
  },
};
