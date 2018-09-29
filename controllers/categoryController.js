
const { Category, Recipe, Ingredient } = require('../models');


module.exports = {


  async index(req, res, next) {
  	let filter = {};
    try {
      if ('id' in req.params) {
      	const { id } = req.params;
      	filter = { where: { id } };
      }
      res.locals.categories = await Category.findAll({
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e);
    }
  },


  // So here I am either going to have data or im not. It will throw an error if data is not found.
  // its calling the categories we put in res.locals and is using a promise (await) to call category.findAll


  async getOne(req, res, next) {
    try {
      // next line is gaurding against getting a bad id
      const id = Number.parseInt(req.params.id, 10);
      res.locals.categories = await Category.findOne({
        where: { id },
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e);
    }
  },


  async create(req, res, next) {
    try {
      const { cuisine_type } = req.body;

      res.locals.categories = await Category.create({
        cuisine_type,
      });

      next();
    } catch (e) {
      next(e);
    }
  },

  async update(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);

      const { 
        cuisine_type,
      } = req.body;

      res.locals.categories = await Category.findOne({
        where: { id },
        rejectOnEmpty: true,
      });

      const newCat = await Category.update({
        cuisine_type,
      }, {
        where: {
          id,
        },
        limit: 1,
        return: true,
      });

      res.locals.categories = newCat

      next();
    } catch (e) {
      next(e);
    }
  },


  async destroy(req, res) {
    res.locals.categories = await Category.destroy({
      where: {
        cuisine_type,
      },
    });
  },


};
