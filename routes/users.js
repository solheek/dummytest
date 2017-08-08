var express = require('express');
var router = express.Router();
var hairshop = require('../models/hairshop');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/hairshopsave', function(req, res, next) {
	var shopdata = {
		shopname: "전형우네",
		address: "안드로이드마을"
	};

	var hairshopdb = new hairshop(shopdata);

	hairshopdb.save(function(err, doc){
		if(err) return next(err);
		console.log('doc=', doc);
		res.json({doc});
	});
});

router.get('/hairshoplist', function(req, res, next) {
	hairshop.find({}, function(err, docs){
		if(err) return next(err);
		console.log('list docs=', docs);
		res.json({docs});
	});
});

module.exports = router;
