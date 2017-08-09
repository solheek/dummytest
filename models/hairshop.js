var mongoose = require('mongoose');

var db = require('./db'); //현재폴더의 db.js를 사용하겠다

var Schema = mongoose.Schema;

var HairshopSchema = new Schema({
	shopname: String,
	address: String
});

//mongoDB에 hairshop테이블 생성
var HairshopModel = db.model('Hairshop', HairshopSchema);

module.exports = HairshopModel;