const Sequelize = require('sequelize');


// connect to the database and set up some behavior
const db = new Sequelize({
  database: 'fooder_dev',
  dialect:  'postgres',
  define:   {
    underscored: true,
    returning:   true,
  },
});

// Recipe has many ingredients and has many categories
const Recipe = db.define('recipe', {
  name:    Sequelize.STRING(64),
  img_url: Sequelize.TEXT,
  image: ,
  cook_time: ,
  calories_per_serving: ,
  instructions: ,
});

// Ingredient has many recipes
const Ingredient = db.define('ingredient', {
  name: Sequelize.STRING(32),

});


// Categories has many Recipes
const Category = db.define('category', {
  cuisine_type: Sequelize.STRING(32),
  name: Sequelize.STRING(32),
  image: Sequelize.STRING(255),
});


// ASSOCIATIONS

// House.hasMany(Student);
// Student.belongsTo(House);

// House.belongsToMany(Color, { through: 'house_color_xref' });
// Color.belongsToMany(House, { through: 'house_color_xref' });


module.exports = {
  Recipe,
  Ingredient,
  Category,
  db,
};
