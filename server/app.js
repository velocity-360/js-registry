var express = require('express')
var path = require('path')
var logger = require('morgan')
var favicon = require('serve-favicon')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var sessions = require('client-sessions')
var mongoose = require('mongoose')
var compression = require('compression')


var app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', require('hogan-middleware').__express)


app.use(logger('dev'))
var staticPath = path.join(__dirname, 'public').replace('server/', '')
//console.log('Static Path: '+static_path)
app.use(express.static(staticPath))

app.get('/', function(req, res, next){

	res.render('index', null)

})

app.listen(3000)
console.log('listening on port 3000')