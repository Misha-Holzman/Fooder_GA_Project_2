const express = require('express');
const recipes = require('../controllers/recipeController');
const views = require('../controllers/viewController');


const recipeRouter = express.Router();


recipeRouter.route('/:id')
  .get(recipes.getOne, views.showOne)
  .put(recipes.update)
  .delete(recipes.destroy, views.handleDestroy);


// everything in this file will be mounted at /recipes
recipeRouter.route('/recipes')
  .get(recipes.index, views.showRecipes)
  .post(recipes.create);


recipeRouter.use(views.showJSON, views.notFound);
// for 'all' requests that come into my recipeRouter, this is always going to be at the end.


module.exports = recipeRouter;
