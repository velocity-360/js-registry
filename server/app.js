var express = require('express')
var path = require('path')
var logger = require('morgan')
var favicon = require('serve-favicon')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var sessions = require('client-sessions')
var mongoose = require('mongoose')
var compression = require('compression')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL, function (err, res) {
  if (err)
    console.log ('ERROR connecting to: ' + process.env.MONGO_URL + '. ' + err)
  else 
    console.log ('DB Connection success')
})

var app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', require('hogan-middleware').__express)


app.use(logger('dev'))
var staticPath = path.join(__dirname, 'public').replace('server/', '')
app.use(express.static(staticPath))


app.use('/', require('./routes/main'))
app.use('/api', require('./routes/api'))


app.listen(3000)
console.log('listening on port 3000')