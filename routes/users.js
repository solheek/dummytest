var express = require('express');
var router = express.Router();
var hairshop = require('../models/hairshop');
var reservation = require('../models/reservation');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/save', function(req, res, next) {
	var shopdata = {
		shopname: "셀럽진영샵",
		address: "주소5"
	};

	var resdata = {
		shopname: "진영샵",
		address: "주소5"
	}

	var hairshopdb = new hairshop(shopdata);
	var reservationdb = new reservation(resdata);

	hairshopdb.save(function(err, doc){
		if(err) return next(err);
		console.log('doc=', doc);
		reservationdb.save(function(err, doc2){
			if(err) return next(err);
			console.log('doc=', doc2);
			res.json({doc: doc,
				doc2: doc2});
		});
	});
});

router.get('/hairshoplist', function(req, res, next) {
	hairshop.find({}, function(err, docs){
		if(err) return next(err);
		console.log('list docs=', docs);
		res.json({
			successcode: 0,
			hairshoplist: docs});
	});
});

router.get('/hairshoplist', function(req, res, next) {
	hairshop.find({}, function(err, docs){
		if(err) return next(err);
		console.log('list docs=', docs);
		res.json({
			successcode: 0,
			hairshoplist: docs});
	});
});

router.get('/hairshoplist', function(req, res, next) {
	hairshop.find({}, function(err, docs){
		if(err) return next(err);
		console.log('list docs=', docs);
		res.json({
			successcode: 0,
			hairshoplist: docs});
	});
});

router.get('/reservationlist', function(req, res, next) {
	reservation.find({}, function(err, docs){
		if(err) return next(err);
		console.log('list docs=', docs);
		res.json({
			successcode: 0,
			reservationlist: docs});
	});
});

module.exports = router;
