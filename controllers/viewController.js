module.exports = {
  // showIngredients(req, res) {
  //   res.json(res.locals);
  // },
  showMain(req, res) {
    res.render('DefaultLayout', { categories: 'hello' })
  },

  showRecipes(req, res) {
    res.json(res.locals);
    // res.redirect(`/recipes/${res.locals.recipes.id}`);
  },
  showHome(req, res) {
    res.render('DefaultLayout', { categories: res.locals.categories });
  },
  showAllRecipes(req, res) {
    res.render('NewRecipeForm');
  },
  // showCategories(req, res) {
  //   res.json(res.locals);
  // },
  // handleRecipeCreate(req, res) {
  // 	res.json(res.locals);
  //   res.redirect(`/showNewRecipe/${res.locals.recipe.id}`);
  // },
  showRecipesByCategory(req, res) {
    res.json(res.locals);
    res.redirect(`/recipesByCatResults/${res.locals.recipe.id}`);
  },
  // handleCategoryCreate(req, res) {
  //   // res.json(res.locals);
  //   res.redirect(`/categories/${res.locals.category.id}`);
  // },
  // handleIngredientsCreate(req, res) {
  //   res.json(res.locals);
  //   // res.redirect(`/ingredients/${res.locals.ingredient.id}`);
  // },
  notFound(err, req, res) {
  	res.sendStatus(404);
  },
  showJSON(req, res) {
  	res.json(res.locals);
  },
  // badCreate(err, req, res, next) {
  // 	res.sendStatus(400);
  // },
  showOneRecipe(req, res) {
  	res.json(res.locals);
    res.redirect(`/SeeOneRecipe/${res.locals.recipe.id}`);
  },
  // showOneIngredient(req, res) {
  //   res.json(res.locals);
  //   // res.redirect(`/SeeOneRecipe/${res.locals.recipe.id}`);
  // },
  // showOneCategory(req, res) {
  //   res.json(res.locals);
  //   // res.redirect(`/SeeOneRecipe/${res.locals.recipe.id}`);
  // },
  // handleUpdate(req, res) {
  // 	res.json(res.locals);
  // 	// res.redirect(`/recipes/${res.locals.recipe.id}`);
  // },
  // badUpdate(err, req, res, next) {
  //   res.sendStatus(400);
  // },
  // handleDestroy(req, res) {
  // 	res.json(res.locals);
  // },
  showCookingTips(req, res) {
    res.render('CookingTips');
  },
  makeNewRecipeForm(req, res) {
    res.render('NewRecipeForm', res.locals);
  },
};


// locals is a container that you throw stuff into

// comment out the redirects when you are developing after you try it so it doesnt drive you crazy
// and it doesnt bouce around

// a redirect is changes your webpage ––> it either interally calls the other route
// or it sends a 301 with a new address and it automatically goes to the new address
