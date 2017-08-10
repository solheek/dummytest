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
	res.send('locationlist DB updating page');

	var data = new Array();

	data[0] ={
		shopname: "호암교수회관",
		address: "서울 관악구 낙성대동 239-1",
		latitude: 37.4679090,
		longitude: 126.9589190,
		cutprice: 5000,
		shoppicture: "http://52.78.174.163:3000/images/img_1.jpg"
	}
	data[1] ={
		shopname: "서울대 교직원 아파트",
		address: "서울 관악구 봉천동 산 56-1",
		latitude: 37.4670190,
		longitude: 126.9597800,
		cutprice: 6000,
		shoppicture: "http://52.78.174.163:3000/images/img_2.jpg"
	}
	data[2] ={
		shopname: "인헌아파트",
		address: "서울 관악구 봉천동 1725",
		latitude: 37.4682690,
		longitude: 126.9621410,
		cutprice: 8000,
		shoppicture: "http://52.78.174.163:3000/images/img_3.jpg"
	}
	data[3] ={
		shopname: "삼성고등학교",
		address: "서울 관악구 대학동 222",
		latitude: 37.4691630,
		longitude: 126.9436850,
		cutprice: 9000,
		shoppicture: "http://52.78.174.163:3000/images/img_4.jpg"
	}
	data[4] ={
		shopname: "사당역",
		address: "서울특별시 동작구 사당동 1026-32",
		latitude: 37.4765590,
		longitude: 126.9816330,
		cutprice: 11000,
		shoppicture: "http://52.78.174.163:3000/images/img_5.jpg"
	}
	data[5] ={
		shopname: "일두 아파트",
		address: "서울특별시 관악구 성현동 1021",
		latitude: 37.4890440,
		longitude: 126.9546130,
		cutprice: 15000,
		shoppicture: "http://52.78.174.163:3000/images/img_6.jpg"
	}
	data[6] ={
		shopname: "대림초등학교",
		address: "서울 동작구 대방동 1길 22",
		latitude: 37.5005990,
		longitude: 126.9253560,
		cutprice: 18000,
		shoppicture: "http://52.78.174.163:3000/images/img_7.jpg"
	}
	data[7] ={
		shopname: "남부터미널역",
		address: "서울특별시 서초구 서초동 1446-1",
		latitude: 37.4849100,
		longitude: 127.0162740,
		cutprice: 24000,
		shoppicture: "http://52.78.174.163:3000/images/img_8.jpg"
	}
	data[8] ={
		shopname: "과천역",
		address: "경기 과천시 별양로 177",
		latitude: 37.4280260,
		longitude: 126.9960360,
		cutprice: 30000,
		shoppicture: "http://52.78.174.163:3000/images/img_9.jpg"
	}

	for(var i=0 ; i< data.length ; i++) {
		var locationdb = new location(data[i]);

		locationdb.save(function(err, doc){
			if(err) return next(err);
			console.log('doc=', doc);
			//res.json({doc: doc});
		});
	}

	console.log('updating complete. >_<');
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

// router.get('/savehairshop', function(req, res, next) {
// 	res.send('헤어샵 배열 저장 페이지');

// 	var data = new Array();
// 	data[0] = {
// 		shopname: "shop1",
// 		address: "서울시 관악구 낙성대동",
// 		shoppicture: "http://localhost:3000/images/img_1.jpg"
// 	}
// 	data[1] = {
// 		shopname: "shop2",
// 		address: "서울시 관악구",
// 		shoppicture: "http://localhost:3000/images/img_2.jpg"
// 	}
// 	data[2] = {
// 		shopname: "또리네..",
// 		address: "서울시 ",
// 		shoppicture: "http://localhost:3000/images/img_3.jpg"
// 	}

// 	console.log('array=', data);

// 	for(var i=0 ; i< data.length ; i++) {
// 		var hairshopdb = new hairshop(data[i]);
// 		hairshopdb.save(function(err, doc){
// 			if(err) return next(err);
// 			console.log('doc=', doc);
// 		});
// 	}
// });

module.exports = router;
