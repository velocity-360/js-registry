var express = require('express')
var path = require('path')
var logger = require('morgan')

var app = express()
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'assets')))

app.get('/', function(req, res, next){

	res.send('TEST')

})

app.listen(3000)
console.log('listening on port 3000')