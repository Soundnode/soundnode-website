var express = require('express')
    , morgan = require('morgan')
    , compression = require('compression')
    , bodyParser = require('body-parser')
    , methodOverride = require('method-override')
    , app = express()
    , port = process.env.PORT || 4000
    , router = express.Router();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());

router.get('/', function(req, res, next) {
    res.render('index.html');
});

app.use('/', router);

app.listen(port);
console.log('App running on port', port);