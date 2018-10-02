const express = require('express');
const categories = require('../controllers/categoryController');
const views = require('../controllers/viewController');


const categoryRouter = express.Router();


// categoryRouter.route('/:id')
//   .get(categories.getOne, views.showOneCategory)
//   .put(categories.update, views.handleUpdate, views.badUpdate)
//   .delete(categories.destroy, views.handleDestroy);


// // everything in this file will be mounted at /categories
// categoryRouter.route('/')
//   .get(categories.index, views.showCategories)
//   .post(categories.create, views.showJSON, views.badCreate);


// categoryRouter.use(views.showJSON, views.notFound);
// for 'all' requests that come into my categoryRouter, this is always going to be at the end.


module.exports = categoryRouter;
