require('./classes/tools.js')

process.env.rootPath    = __dirname;

const express           = require('express');
const exphbs            = require('express-handlebars');

const app               = module.exports = express();

const path              = require('path');
const bodyParser        = require('body-parser');
const cookieParser      = require('cookie-parser');
const cookieSession     = require('cookie-session');
const cors              = require('cors');

const hbshelpers        = require('./classes/helpers');

global.VIEWS_PATH       = path.join(__dirname, 'views');

global.APP_URL          = process.env.NODE_ENV === 'local' ? ("https://branchdevs.com").trimEnd("/"): ("http://localhost:3000/").trimEnd("/");
global.APP_NAME         = "Branch Devs";
global.ASSETS_PATH      = '/assets';


// set the view engine to ejs
app.set('views', VIEWS_PATH);
app.engine('hbs', exphbs.engine({defaultLayout: 'default',extname: '.hbs',helpers: hbshelpers}));
app.set('view engine', 'hbs');

// cors
app.use(cors({ origin: true, credentials: true }));

//request parsing use statements
app.use(cookieParser());
app.use(bodyParser.json());

//set session settings
app.use(cookieSession({
    name: 'session',
    keys: ['einuiyu1keVei4mu9au0ingu7Theob7eicie0oom','aiemmh4cugToke00yo97uebin1o7unuieeieiuVi'],
    httpOnly : true,
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

//if local
if(process.env.NODE_ENV === 'local'){
    app.use('/assets', express.static('assets'));
} else {
    app.use(function(req, res, next) {
        var schema = req.headers['x-forwarded-proto'];
        if (schema === 'https') { next(); }
        else { res.redirect('https://' + req.headers.host + req.url); }
    });
}
// go to routes
app.use('/', require('./routes'));
    
//if local listen to localhost:3000
if(process.env.NODE_ENV === 'local'){
    app.listen(3000, '127.0.0.1');
}