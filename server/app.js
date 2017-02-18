var express = require('express')
var path = require('path')
var logger = require('morgan')

var app = express()
app.use(logger('dev'))
var staticPath = path.join(__dirname, 'public').replace('server/', '')
//console.log('Static Path: '+static_path)
app.use(express.static(staticPath))

app.get('/', function(req, res, next){

	res.send('TEST')

})

app.listen(3000)
console.log('listening on port 3000')