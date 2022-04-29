var mongoose = require("mongoose"),
	bookSchema;

	bookSchema = mongoose.Schema({
		_id: String,
		name: String,
		author: String,
		img: String,
		price: String,
		category: String
	});
	var bookShop = mongoose.model("bookShop", bookSchema, "books");

module.exports =  bookShop;