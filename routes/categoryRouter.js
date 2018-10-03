const express = require('express');
const categories = require('../controllers/categoryController');
const views = require('../controllers/viewController');


const categoryRouter = express.Router();


// categoryRouter.route('/:id')
//   .get(categories.getOne, views.showOneCategory)
//   .put(categories.update, views.handleUpdate, views.badUpdate)
//   .delete(categories.destroy, views.handleDestroy);


categoryRouter.route('/')
  .get(categories.index, views.showJSON)
  // .post(categories.create, views.showJSON, views.badCreate);


// categoryRouter.use(views.showJSON, views.notFound);
// for 'all' requests that come into my categoryRouter, this is always going to be at the end.


module.exports = categoryRouter;



// seeded weird ––> so I am having trouble rendering my data
// is it possible to refactor it so that it is set up in a way that will be easier to 