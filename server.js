const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const reactViews = require('express-react-views');
const methodOverride = require('method-override')
const path = require('path')


const recipeRouter = require('./routes/recipeRouter');
const categoryRouter = require('./routes/categoryRouter');
const ingredientsRouter = require('./routes/ingredientsRouter');
const recipeController = require('./controllers/recipeController');
const categoryController = require('./controllers/categoryController');
const ingredientsController = require('./controllers/ingredientsController');




const PORT = process.env.PORT || 3000;

// set up express
const app = express();
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());


app.use(logger('dev'));
app.use(methodOverride('_method'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join('public')));


app.use('/recipes', recipeRouter);
app.use('/ingredients', ingredientsRouter);
app.use('/categories', categoryRouter);


app.get('/', (req, res) => {
	res.render('Index');
});


app.listen(PORT, () => console.log(`Server up and Foooooder listening on port ${PORT} in ${app.get('env')} mode`));
