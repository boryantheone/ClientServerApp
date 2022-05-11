var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
	login: {type: String, unique: true, required: true},
	pos: String,
	cart: [String]
});

var users = mongoose.model("users", userSchema, "users");
module.exports = users;