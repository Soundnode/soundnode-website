var express = require('express'),
    morgan = require('morgan'),
    shrinkRay = require('shrink-ray'),
    app = express(),
    port = process.env.PORT || 4000

app.use(shrinkRay())
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))

app.listen(port, function() {
  console.log('App listening on port ' + port + '...')
})
