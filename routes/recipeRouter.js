const express = require('express');
const recipes = require('../controllers/recipeController');
const views = require('../controllers/viewController');


const recipeRouter = express.Router();

recipeRouter.get('/:id/edit', recipes.showEditForm);

recipeRouter.get('/new', recipes.showNewForm);


recipeRouter.route('/:id')
  .get(recipes.getOne, views.showOne)
  .put(recipes.update, views.handleUpdate, views.badUpdate)
  .delete(recipes.destroy, views.handleDestroy);


// everything in this file will be mounted at /recipes
recipeRouter.route('/')
  .get(recipes.index, views.showRecipes)
  .post(recipes.create, views.showJSON, views.badCreate);


recipeRouter.get('/home', views.showHome);


recipeRouter.use(views.showJSON, views.notFound);
// for 'all' requests that come into my recipeRouter, this is always going to be at the end.


// notes from DefaultLayout:
//< title>{title}</title >
// {children}

// youtube -> react conponents and props or just react props
// https://reactjs.org/docs/introducing-jsx.html
//  -> functional and props (something like that)   -> read 2 and 4 not 5
// do a codepen –>


module.exports = recipeRouter;
