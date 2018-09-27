const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const reactViews = require('express-react-views');
const recipeRouter = require('./routes/houseRouter');
const categoryRouter = require('./routes/studentRouter');
const ingredientsRouter = require('./routes/studentRouter');
const recipeController = require('./routes/houseController');
const categoryController = require('./routes/studentController');
const ingredientsController = require('./routes/studentController');


const PORT = process.env.PORT || 3000;

const app = express();



app.set('view engine', 'jsx')
app.engine('jsx', reactViews.createEngine())


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))   


app.use('/recipes', recipesRouter);
app.use('/ingredients', ingredientsRouter);
app.use('/categories', categoryRouter);


app.get('/', (req, res) => {
  res.send('hello world');
});






app.listen(PORT, () => console.log(`Server up and Foooooooder listening on port ${PORT} in ${app.get('env')} mode`));
