exports.getSixCategoriesIds = (allCategories) => {
  const nonMutationAllCategories = [...allCategories];
  const l = nonMutationAllCategories.length - 1;
  const result = [];

  while (result.length < 5) {
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
