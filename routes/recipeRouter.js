const express = require('express');
const recipes = require('../controllers/recipeController');
const views = require('../controllers/viewController');


const recipeRouter = express.Router();


recipeRouter.get('/:id/edit', recipes.showEditForm);


recipeRouter.route('/:id')
  .get(recipes.getOne, views.showOneRecipe);
// .put(recipes.update, views.handleUpdate, views.badUpdate)
// .delete(recipes.destroy, views.handleDestroy);


// recipeRouter.route('/newRecipe')
//   .get(recipes.index, views.showAllRecipes)
//   .post(recipes.create)


recipeRouter.get('/home', views.showHome);


// recipeRouter.post('/showNewRecipe', views.handleRecipeCreate);


recipeRouter.route('/recipesByCategory')
  .get(recipes.index, views.showRecipesByCategory);


recipeRouter.route('/')
  .get(recipes.index, views.showRecipes);
// .post(recipes.create, views.showJSON, views.badCreate);


// recipeRouter.get('/new', recipes.showNewForm);


// recipeRouter.use(views.showJSON, views.notFound);
// for 'all' requests that come into my recipeRouter, this is always going to be at the end.


module.exports = recipeRouter;
