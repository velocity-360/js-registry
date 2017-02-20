var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){

	res.render('index', null)

})

router.get('/:page', function(req, res, next){

	res.render(req.params.page, null)

})

module.exports = router