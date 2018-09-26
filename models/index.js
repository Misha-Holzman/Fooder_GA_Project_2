const Sequelize = require('sequelize');


// connect to the database and set up some behavior
const db = new Sequelize({
  database: 'fooder_dev',
  dialect: 'postgres',
  define: {
    underscored: true,
    returning: true,
  },
});


const Recipe = db.define('recipe', {
  name: {
    type:      Sequelize.STRING(64),
    unique:    true,
    allowNull: false,
  },
  img_url: {
    type:      Sequelize.TEXT,
    allowNull: false,
  },
  yeild: {
    type:      Sequelize.INTEGER,
    allowNull: false,
  },
  total_cook_time: {
    type:      Sequelize.INTEGER,
    allowNull: false,
  },
  calories_per_serving: {
    type:      Sequelize.INTEGER,
  },
  description: {
    type:      Sequelize.TEXT,
  },
  directions: {
    type:      Sequelize.TEXT,
    allowNull: false,
  }
});


const Ingredient = db.define('ingredient', {
  name: {
    type:      Sequelize.STRING(64),
    allowNull: false,
  }
});


const Category = db.define('category', {
  cuisine_type: {
    type:      Sequelize.STRING(32),
  },
  cook_time: {
    type:      Sequelize.INTEGER,
    allowNull: false,
  },
  max_calories: {
    type:      Sequelize.INTEGER,
  },
  vegitarian: {
    type:      Sequelize.BOOLEAN,
  },
  meat: {
    type:      Sequelize.BOOLEAN,
  }
});


const RecipeIngredient = db.define('recipe_ingredients', {
  quantity: Sequelize.STRING(64),
});


// ASSOCIATIONS

Recipe.belongsToMany(Ingredient, { through: 'recipe_ingredients' });
Ingredient.belongsToMany(Recipe, { through: 'recipe_ingredients' });

Recipe.belongsToMany(Category, { through: 'recipe_category_xref' });
Category.belongsToMany(Recipe, { through: 'recipe_category_xref' });


module.exports = {
  Recipe,
  Ingredient,
  Category,
  RecipeIngredient,
  db,
};
