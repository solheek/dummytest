var express = require('express');
var router = express.Router();
var hairshop = require('../models/hairshop');
var reservation = require('../models/reservation');
var location = require('../models/location');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/save', function(req, res, next) {
	var shopdata = {
		shopname: "전형우샵",
		address: "주소1"
	};

	var resdata = {
		shopname: "곽솔희샵",
		address: "주소2"
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

router.get('/savelocation', function(req, res, next) {
	var data = {
		shopname: "성남중학교",
		address: "서울 동작구 대방동길 74",
		latitude: 37.5006530,
		longitude: 126.9253100,
		cutprice: 20000
	};

	var locationdb = new location(data);

	locationdb.save(function(err, doc){
		if(err) return next(err);
		console.log('doc=', doc);

		res.json({doc:doc});
	});
});

router.get('/hairshoplist', function(req, res, next) {
	hairshop.find({}, function(err, docs){
		if(err) return next(err);
		console.log('list docs=', docs);
		res.json({
			successcode: 1,
			hairshoplist: docs});
	});
});

router.get('/reservationlist', function(req, res, next) {
	reservation.find({}, function(err, docs){
		if(err) return next(err);
		console.log('list docs=', docs);
		res.json({
			successcode: 1,
			reservationlist: docs});
	});
});

router.get('/locationlist', function(req, res, next) {
	location.find({}, function(err, docs){
		if(err) return next(err);
		console.log('list docs=', docs);
		res.json({
			successcode: 1,
			locationlist: docs});
	});
});

module.exports = router;
