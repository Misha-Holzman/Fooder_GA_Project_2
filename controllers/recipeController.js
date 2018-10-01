// TODO: [1] import the your model
const { Category, Recipe, Ingredient } = require('../models');


module.exports = {
  /**
   * @async
   * @method index
   * @desc Get all the recipes and set them in res.locals
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */

  async index(req, res, next) {
    let filter = {};
    try {
      if ('id' in req.params) {
        const { id } = req.params;
        filter = { where: { id } };
      }
      res.locals.recipes = await Recipe.findAll({
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e);
    }
  },


  // So here I am either going to have data or im not. It will throw an error if data is not found.
  // its calling the recipes we put in res.locals and is using a promise (await) to call recipe.findAll


  async getOne(req, res, next) {
    try {
      // next line is gaurding against getting a bad id
      const id = Number.parseInt(req.params.id, 10);
      res.locals.recipes = await Recipe.findOne({
        where: { id },
        include: [Ingredient, Category],
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e);
    }
  },




  async create(req, res, next) {
    try {
      // receiving from the body
      const {
        name,
        img_url,
        yeild,
        total_cook_time,
        calories_per_serving,
        description,
        directions,
        vegitarian,
        meat,
      } = req.body;

      res.locals.recipes = await Recipe.create({
        name,
        img_url,
        yeild,
        total_cook_time,
        calories_per_serving,
        description,
        directions,
        vegitarian,
        meat,
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
        img_url,
        yeild,
        total_cook_time,
        calories_per_serving,
        description,
        directions,
        vegitarian,
        meat,
      } = req.body;

      res.locals.recipes = await Recipe.findOne({
        where: { id },
        rejectOnEmpty: true,
      });

      const newRecipe = await Recipe.update({
        name,
        img_url,
        yeild,
        total_cook_time,
        calories_per_serving,
        description,
        directions,
        vegitarian,
        meat,
      }, {
        where: {
          id,
        },
        limit: 1,
        return: true,
      });

      res.locals.recipes = newRecipe

      next();
    } catch (e) {
      next(e);
    }
  },


  async destroy(req, res) {
    res.locals.recipes = await Recipe.destroy({
      where: {
        name,
        img_url,
        yeild,
        total_cook_time,
        calories_per_serving,
        description,
        directions,
        vegitarian,
        meat,
      },
    });
  },


  async showNewForm(req, res) {
    // TODO: make this method
    res.send('im a NEW Recipe form');
  },



  async showEditForm(req, res) {
    // TODO: make this method
    res.send('im an EDIT Recipe form');
  },









};



 








