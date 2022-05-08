var users = require("../models/user.js"),
	Product = require("../models/product.js"),
	mongoose = require("mongoose"),
	UsersController = {};

// users.find({}, function(err, result){
// 	if (err !== null){
// 		console.log("Error -> " + err);
// 	} else if (result.length === 0){
// 		console.log("Добавление администратора!");
// 		var admin = new User({"login": "admin", "role":"Администратор"});
// 		admin.save(function (err, result) {
// 			if (err != null){
// 				console.log("Error -> " + err);
// 			}
// 			else {
// 				console.log("Администратор добавлен!");
// 			}
// 		});
// 	}
// });

UsersController.index = function(req, res){
	users.find(function(err, users){
		if (err != null){
			console.log("Error! ->" + err);
			res.json(500, err);
		} else {
			res.json(200, users);
		}
	});
};

UsersController.show = function(req, res){
	var log = req.params.login;
	console.log("Пользователь " + log + " заходит в систему!");
	users.find({'login': log}, function(err, result) {
		if (err) {
			console.log("Ошибка! -> " + err);
		} else if (result.length !== 0) {
			console.log("я выбираю роль");
			if (result[0].pos == 'Пользователь'){
				res.sendfile('./client/user.html');
			}
			else if (result[0].pos == 'Администратор'){
				console.log("я выбрал админа");
				res.sendfile('./client/admin.html');
			}
			if (result[0].pos == 'Модератор'){
				res.sendfile('./client/moder.html');
			}
		} else {
			res.send(404);
		}
	});
};

UsersController.createUser = function(req, res) {
	var login = req.params.login;
	console.log(login);
	users.find({'login': login}, function(err, result) {
		if (err) {
			console.log("Ошибка! -> " + err);
			res.send(500, err);
		} else if (result.length !== 0) {
			console.log("уже есть в системе");
			res.send(501, err);
		} else {
			var newUser = new users({
				"login": login,
				"pos": "Пользователь"
			});
			newUser.save(function(err, result) {
				console.log(err);
				if (err !== null){
					res.json(500, err);
				} else {
					res.json(200, result);
					console.log("Добавление произошло успешно!");
				}
			});
		}
	});
};


module.exports = UsersController;