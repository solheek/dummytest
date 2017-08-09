var mongoose = require('mongoose');

var db = require('./db'); //현재폴더의 db.js를 사용하겠다

var Schema = mongoose.Schema;

var LocationSchema = new Schema({
	shopname: String, //가게이름
	address: String, //주소
	latitude: Number, //위도
	longitude: Number, //경도
	cutprice: Number //가격
});

//mongoDB에 hairshop테이블 생성
var LocationModel = db.model('Location', LocationSchema);

module.exports = LocationModel;