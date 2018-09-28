const express = require('express');
const ingredients = require('../controllers/ingredientsController');
const views = require('../controllers/viewController');


const ingredientsRouter = express.Router();


ingredientsRouter.route('/:ingredients_id')
  .get(ingredients.getOne, views.showOne)
  // .put(ingredients.update, views.handleUpdate, views.badUpdate)
  .delete(ingredients.destroy, views.handleDestroy);


// everything in this file will be mounted at /ingredients
ingredientsRouter.route('/')
  .get(ingredients.index, views.showIngredients)
  .post(ingredients.create, views.showJSON, views.badCreate);


// ingredientsRouter.route('/:ingredients_id/students')
//   .get(ingredients.getOne, views.showStudents)


ingredientsRouter.use(views.showJSON, views.notFound);
// for 'all' requests that come into my ingredientsRouter, this is always going to be at the end.


module.exports = ingredientsRouter;
