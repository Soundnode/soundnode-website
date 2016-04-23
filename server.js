var express = require('express'),
    shrinkRay = require('shrink-ray'),
    app = express(),
    port = process.env.PORT || 4000

app.use(shrinkRay())
app.use(express.static(__dirname + '/static'))

app.listen(port, function () {
  console.log('App listening on port ' + port + '...')
})
