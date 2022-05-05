var Product = require("../models/product.js"),
	User = require("../models/user.js"),
	mongoose = require("mongoose"),
	UsersController = {};

UsersController.show = function(req, res){
	console.log('smth');
}

User.find({}, function(err, result){
	if (err !== null){
		console.log("Error -> " + err);
	} else if (result.length === 0){
		console.log("Добавление администратора!");
		var admin = new User({"login": "admin", "role":"Администратор"})ж
		admin.save(function (err, result) {
			if (err != null){
				console.log("Error -> " + err);
			}
			else {
				console.log("Администратор добавлен!");
			}
		});
	}
});

