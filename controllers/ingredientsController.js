
const { Ingredient, Category, Recipe } = require('../models');


module.exports = {


  async index(req, res, next) {
  	let filter = {};
    try {
      if ('id' in req.params) {
      	const { id } = req.params;
      	filter = { where: { id } };
      }
      res.locals.ingredients = await Ingredient.findAll({
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e);
    }
  },


  // So here I am either going to have data or im not. It will throw an error if data is not found.
  // its calling the ingredients we put in res.locals and is using a promise (await) to call ingredient.findAll


  async getOne(req, res, next) {
    try {
      // next line is gaurding against getting a bad id
      const id = Number.parseInt(req.params.id, 10);
      res.locals.ingredients = await Ingredient.findOne({
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
      const { name } = req.body;

      res.locals.ingredients = await Ingredient.create({
        name,
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
        name,
      } = req.body;

      res.locals.ingredients = await Ingredient.findOne({
        where: { id },
        rejectOnEmpty: true,
      });

      const newIng = await Ingredient.update({
        name,
      }, {
        where: {
          id,
        },
        limit: 1,
        return: true,
      });

      res.locals.ingredients = newIng

      next();
    } catch (e) {
      next(e);
    }
  },


  async destroy(req, res) {
    res.locals.ingredients = await Ingredient.destroy({
      where: {
        name,
      },
    });
  },


};
