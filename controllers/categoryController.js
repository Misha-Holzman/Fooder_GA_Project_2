
const { Category, Recipe, Ingredient } = require('../models');


module.exports = {


  async index(req, res, next) {
  	let filter = {};
    try {
      if ('recipe_id' in req.params) {
      	const { recipe_id } = req.params
      	filter = { where: { recipe_id }}
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
  // its calling the categories we put in res.locals and is using a promise (await) to call house.findAll




  async getOne(req, res, next) {
    try {
      // next line is gaurding against getting a bad id
      const id = Number.parseInt(req.params.id, 10);
      res.locals.categories = await Category.findOne({
        where:         { id },
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e);
    }
  },



  async create(req, res, next) {
    try {
      const {
        fname, lname, image,
      } = req.body;

      res.locals.categories = await Category.create({
        name,
        img_url,
      });

      next();
    } catch (e) {
      next(e);
    }
  },



  async update(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      res.locals.categories = await Category.update({
        fname,
        lname,
        image,
      }, {
        where: {
          	id,
        },
      });
      next();
    } catch (e) {
      next(e);
    }
  },




  async destroy(req, res) {
    res.locals.categories = await Category.destroy({
      where: {
        fname,
        lname,
        image,
        recipe_id,
      },
    });
  },
















};
