var express = require('express')

var app = express()
app.get('/', function(req, res, next){

	res.send('TEST')

})

app.listen(3000)
console.log('listening on port 3000')