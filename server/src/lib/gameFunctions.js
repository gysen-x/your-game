exports.getSixCategoriesIds = (allCategories) => {
  const nonMutationAllCategories = [...allCategories];
  const l = nonMutationAllCategories.length - 1;
  const result = [];

  while (result.length < 6) {
    const random = Math.floor(Math.random() * (l + 1));
    const category = nonMutationAllCategories[random];
    const olnlyNames = result.map((el) => el.name);
    if (!olnlyNames.includes(category.name)) result.push(category);
  }

  return result.map((el) => el.id);
};

exports.getQuestionsSet = (questions, categories, id) => {
  const onlyOurCategoryQuestions = [[], [], [], [], [], []];

  for (let i = 0; i < categories.length; i += 1) {
    for (let j = 0; j < questions.length; j += 1) {
      if (questions[j].categoryId === categories[i]) {
        onlyOurCategoryQuestions[i].push(questions[j]);
      }
    }
  }

  const onlyOneFiveQuestionsForCategory = [];

  for (let i = 0; i < onlyOurCategoryQuestions.length; i += 1) {
    const q200 = [];
    const q400 = [];
    const q600 = [];
    const q800 = [];
    const q1000 = [];
    for (let j = 0; j < onlyOurCategoryQuestions[i].length; j += 1) {
      if (onlyOurCategoryQuestions[i][j].points === 200) {
        q200.push(onlyOurCategoryQuestions[i][j]);
      } else if (onlyOurCategoryQuestions[i][j].points === 400) {
        q400.push(onlyOurCategoryQuestions[i][j]);
      } else if (onlyOurCategoryQuestions[i][j].points === 600) {
        q600.push(onlyOurCategoryQuestions[i][j]);
      } else if (onlyOurCategoryQuestions[i][j].points === 800) {
        q800.push(onlyOurCategoryQuestions[i][j]);
      } else {
        q1000.push(onlyOurCategoryQuestions[i][j]);
      }
    }

    onlyOneFiveQuestionsForCategory.push(q200[Math.floor(Math.random() * ((q200.length - 1) + 1))]);
    onlyOneFiveQuestionsForCategory.push(q400[Math.floor(Math.random() * ((q400.length - 1) + 1))]);
    onlyOneFiveQuestionsForCategory.push(q600[Math.floor(Math.random() * ((q600.length - 1) + 1))]);
    onlyOneFiveQuestionsForCategory.push(q800[Math.floor(Math.random() * ((q800.length - 1) + 1))]);
    onlyOneFiveQuestionsForCategory.push(q1000[Math.floor(Math.random() * ((q1000.length - 1) + 1))]);
  }

  const result = [];

  for (let i = 0; i < onlyOneFiveQuestionsForCategory.length; i += 1) {
    result.push({ status: false, gameId: id, questionId: onlyOneFiveQuestionsForCategory[i].id });
  }

  return result;
};

// const q = [
//   {
//     id: 1,
//     status: false,
//     gameId: 1,
//     questionId: 31,
//     Question: { id: 31, points: 200, categoryId: 4 },
//   },
//   {
//     id: 2,
//     status: false,
//     gameId: 1,
//     questionId: 33,
//     Question: { id: 33, points: 400, categoryId: 4 },
//   },
//   {
//     id: 3,
//     status: false,
//     gameId: 1,
//     questionId: 36,
//     Question: { id: 36, points: 600, categoryId: 4 },
//   },
//   {
//     id: 4,
//     status: false,
//     gameId: 1,
//     questionId: 38,
//     Question: { id: 38, points: 800, categoryId: 4 },
//   },
//   {
//     id: 5,
//     status: false,
//     gameId: 1,
//     questionId: 39,
//     Question: { id: 39, points: 1000, categoryId: 4 },
//   },
//   {
//     id: 6,
//     status: false,
//     gameId: 1,
//     questionId: 22,
//     Question: { id: 22, points: 200, categoryId: 3 },
//   },
//   {
//     id: 7,
//     status: false,
//     gameId: 1,
//     questionId: 23,
//     Question: { id: 23, points: 400, categoryId: 3 },
//   },
//   {
//     id: 8,
//     status: false,
//     gameId: 1,
//     questionId: 26,
//     Question: { id: 26, points: 600, categoryId: 3 },
//   },
//   {
//     id: 9,
//     status: false,
//     gameId: 1,
//     questionId: 27,
//     Question: { id: 27, points: 800, categoryId: 3 },
//   },
//   {
//     id: 10,
//     status: false,
//     gameId: 1,
//     questionId: 29,
//     Question: { id: 29, points: 1000, categoryId: 3 },
//   },
//   {
//     id: 11,
//     status: false,
//     gameId: 1,
//     questionId: 11,
//     Question: { id: 11, points: 200, categoryId: 2 },
//   },
//   {
//     id: 12,
//     status: false,
//     gameId: 1,
//     questionId: 13,
//     Question: { id: 13, points: 400, categoryId: 2 },
//   },
//   {
//     id: 13,
//     status: false,
//     gameId: 1,
//     questionId: 16,
//     Question: { id: 16, points: 600, categoryId: 2 },
//   },
//   {
//     id: 14,
//     status: false,
//     gameId: 1,
//     questionId: 18,
//     Question: { id: 18, points: 800, categoryId: 2 },
//   },
//   {
//     id: 15,
//     status: false,
//     gameId: 1,
//     questionId: 20,
//     Question: { id: 20, points: 1000, categoryId: 2 },
//   },
//   {
//     id: 16,
//     status: false,
//     gameId: 1,
//     questionId: 51,
//     Question: { id: 51, points: 200, categoryId: 6 },
//   },
//   {
//     id: 17,
//     status: false,
//     gameId: 1,
//     questionId: 54,
//     Question: { id: 54, points: 400, categoryId: 6 },
//   },
//   {
//     id: 18,
//     status: false,
//     gameId: 1,
//     questionId: 55,
//     Question: { id: 55, points: 600, categoryId: 6 },
//   },
//   {
//     id: 19,
//     status: false,
//     gameId: 1,
//     questionId: 58,
//     Question: { id: 58, points: 800, categoryId: 6 },
//   },
//   {
//     id: 20,
//     status: false,
//     gameId: 1,
//     questionId: 60,
//     Question: { id: 60, points: 1000, categoryId: 6 },
//   },
//   {
//     id: 21,
//     status: false,
//     gameId: 1,
//     questionId: 41,
//     Question: { id: 41, points: 200, categoryId: 5 },
//   },
//   {
//     id: 22,
//     status: false,
//     gameId: 1,
//     questionId: 44,
//     Question: { id: 44, points: 400, categoryId: 5 },
//   },
//   {
//     id: 23,
//     status: false,
//     gameId: 1,
//     questionId: 45,
//     Question: { id: 45, points: 600, categoryId: 5 },
//   },
//   {
//     id: 24,
//     status: false,
//     gameId: 1,
//     questionId: 47,
//     Question: { id: 47, points: 800, categoryId: 5 },
//   },
//   {
//     id: 25,
//     status: false,
//     gameId: 1,
//     questionId: 50,
//     Question: { id: 50, points: 1000, categoryId: 5 },
//   },
//   {
//     id: 26,
//     status: false,
//     gameId: 1,
//     questionId: 1,
//     Question: { id: 1, points: 200, categoryId: 1 },
//   },
//   {
//     id: 27,
//     status: false,
//     gameId: 1,
//     questionId: 3,
//     Question: { id: 3, points: 400, categoryId: 1 },
//   },
//   {
//     id: 28,
//     status: false,
//     gameId: 1,
//     questionId: 6,
//     Question: { id: 6, points: 600, categoryId: 1 },
//   },
//   {
//     id: 29,
//     status: false,
//     gameId: 1,
//     questionId: 7,
//     Question: { id: 7, points: 800, categoryId: 1 },
//   },
//   {
//     id: 30,
//     status: false,
//     gameId: 1,
//     questionId: 9,
//     Question: { id: 9, points: 1000, categoryId: 1 },
//   },
// ];

exports.getSortedQuestions = (questions) => {
  const categories = [];
  for (let i = 0; i < questions.length; i += 1) {
    if (!categories.map((el) => el.name).includes(questions[i].Question.Category.name)) categories.push(questions[i].Question.Category);
  }

  const sortedQuestions = [{}, {}, {}, {}, {}, {}];
  for (let i = 0; i < categories.length; i += 1) {
    sortedQuestions[i].category = categories[i];
    sortedQuestions[i].questions = [];
  }

  for (let i = 0; i < categories.length; i += 1) {
    for (let j = 0; j < questions.length; j += 1) {
      if (questions[j].Question.categoryId === sortedQuestions[i].category.id) {
        sortedQuestions[i].questions.push(questions[j]);
      }
    }
  }

  for (let i = 0; i < sortedQuestions.length; i += 1) {
    sortedQuestions[i].questions.sort((a, b) => a.Question.points - b.Question.points);
  }

  return sortedQuestions;
};
