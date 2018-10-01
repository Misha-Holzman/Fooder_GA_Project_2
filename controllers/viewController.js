module.exports = {
  showIngredients(req, res) {
    res.json(res.locals);
  },
  showRecipes(req, res) {
    res.json(res.locals);
  },
  showHome(req, res) {
    res.render('DefaultLayout');
  },
  showAllRecipes(req, res) {
    res.send('recipes');
  },
  showCategories(req, res) {
    res.json(res.locals);
  },
  handleRecipeCreate(req, res) {
  	res.json(res.locals);
    res.redirect(`/recipes/${res.locals.recipe.id}`);
  },
  handleCategoryCreate(req, res) {
    // res.json(res.locals);
    res.redirect(`/categories/${res.locals.category.id}`);
  },
  handleIngredientsCreate(req, res) {
    res.json(res.locals);
    // res.redirect(`/ingredients/${res.locals.ingredient.id}`);
  },
  notFound(err, req, res, next) {
  	res.sendStatus(404);
  },
  showJSON(req, res) {
  	res.json(res.locals);
  },
  badCreate(err, req, res, next) {
  	res.sendStatus(400);
  },
  showOne(req, res) {
  	res.json(res.locals);
  },
  handleUpdate(req, res) {
  	res.json(res.locals);
  	// res.redirect(`/recipes/${res.locals.recipe.id}`);
  },
  badUpdate(err, req, res, next) {
    res.sendStatus(400);
  },
  handleDestroy(req, res) {
  	res.json(res.locals);
  },
  showCookingTips(req, res) {
    res.render('CookingTips');
  },
  makeNewRecipeForm(req, res) {
    res.render('NewRecipeForm')
  }
};


// locals is a container that you throw stuff into

// comment out the redirects when you are developing after you try it so it doesnt drive you crazy
// and it doesnt bouce around

// a redirect is changes your webpage ––> it either interally calls the other route
// or it sends a 301 with a new address and it automatically goes to the new address
