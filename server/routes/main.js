var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){
	if (req.session == null){
		res.redirect('/register')
		return
	}

	if (req.session.site == null){
		res.redirect('/register')
		return
	}

	res.render('index', null) // this mounts the react app

})

router.get('/:page', function(req, res, next){
	if (req.params.page == 'aws'){
		next()
		return
	}

	res.render(req.params.page, null)

})

module.exports = router