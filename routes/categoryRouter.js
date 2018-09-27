const express = require('express');
const categories  = require('../controllers/categoryController');
const views   = require('../controllers/viewController');


const categoryRouter = express.Router();


categoryRouter.route('/:category_id')
  .get(categories.getOne, views.showOne)
  .put(categories.update, views.handleUpdate, views.badUpdate)
  .delete(categories.destroy, views.handleDestroy);




// everything in this file will be mounted at /categories
categoryRouter.route('/')
  .get(categories.index, views.showCategories)
  .post(categories.create, views.handleCreate, views.badCreate);




categoryRouter.use(views.showJSON, views.notFound);
// for 'all' requests that come into my categoryRouter, this is always going to be at the end.


module.exports = categoryRouter;