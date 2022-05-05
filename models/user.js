var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
	login: String,
	rule: String,
	cart: [String]
});

var users = mongoose.model("user", userSchema, "users");
module.exports = users;