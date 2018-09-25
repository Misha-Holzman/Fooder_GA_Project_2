const express     = require('express');
const logger      = require('morgan');
const bodyParser  = require('body-parser');
const reactViews  = require('express-react-views');

// const houseRouter = require('./routes/houseRouter');
// const studentRouter = require('./routes/studentRouter');
// init a port
const PORT = process.env.PORT || 3000;

// set up express
const app = express();

// logger
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/houses', houseRouter);
// app.use('/students', studentRouter);


app.get('/', (req, res) => {
  res.send('hello world');
});




app.listen(PORT, () => console.log(`Server up and Fooder listening on port ${PORT} in ${app.get('env')} mode`));

