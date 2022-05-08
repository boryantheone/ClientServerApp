var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
	login: {type: String, unique: true, required: true},
	pos: String,
	cart: [[]]
});

var users = mongoose.model("users", userSchema, "users");
module.exports = users;