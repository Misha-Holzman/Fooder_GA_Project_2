
const { Student, House } = require('../models');


module.exports = {


  async index(req, res, next) {
  	let filter = {};
    try {
      if ('house_id' in req.params) {
      	const {house_id} = req.params
      	filter = { where: { house_id }}
      }
      res.locals.students = await Student.findAll({
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e);
    }
  },


  // So here I am either going to have data or im not. It will throw an error if data is not found.
  // its calling the students we put in res.locals and is using a promise (await) to call house.findAll




  async getOne(req, res, next) {
    try {
      // next line is gaurding against getting a bad id
      const id = Number.parseInt(req.params.id, 10);
      res.locals.students = await Student.findOne({
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

      res.locals.students = await Student.create({
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
      res.locals.students = await Student.update({
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
    res.locals.students = await Student.destroy({
      where: {
        fname,
        lname,
        image,
        house_id,
      },
    });
  },
















};
