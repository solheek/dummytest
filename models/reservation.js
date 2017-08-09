var mongoose = require('mongoose');

var db = require('./db'); //현재폴더의 db.js를 사용하겠다

var Schema = mongoose.Schema;

var ReservationSchema = new Schema({
	shopname: String,
	address: String,
	date: { type: Date, default: Date.now }
});

var ReservationModel = db.model('Reservation', ReservationSchema);

module.exports = ReservationModel;