/*  EXTERNAL MODULES  */

require('dotenv').config();

const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');

console.log('checking', process.env);

/*  PORT  */
const PORT = 4000;



/*  APP SETUP  */
const app = express();
app.set('view engine', 'ejs');



// Connect to DB
require('./config/database');
require('./config/passport');


/*  INTERNAL MODULES  */
const logger = require('morgan');
const routes = require('./routes');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


/*  MIDDLEWARE  */
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



/*  PASSPORT SETUP  */
app.use(session({
    secret: 'SEIRFLEXRocks!',
    resave: false,
    saveUninitialized: true
  }));

app.use(passport.initialize());
app.use(passport.session());



/*  ROUTES  */
app.use('/', indexRouter);
app.use('/users', usersRouter);


/*  LISTEN  */

app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`);
});


