var express = require('express')
    , morgan = require('morgan')
    , compression = require('compression')
    , bodyParser = require('body-parser')
    , methodOverride = require('method-override')
    , app = express()
    , port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/public'));
app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());

app.listen(port, function() {
  console.log('App running on port', port);
});
