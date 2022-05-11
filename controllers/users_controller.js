var users = require("../models/user.js"),
	Product = require("../models/product.js"),
	mongoose = require("mongoose"),
	UsersController = {};

UsersController.index = function (req, res) {
	users.find(function (err, users) {
		if (err != null) {
			console.log("Error! ->" + err);
			res.json(500, err);
		} else {
			res.json(200, users);
		}
	});
};

UsersController.show = function (req, res) {
	var log = req.params.login;
	console.log("Пользователь " + log + " заходит в систему!");
	users.find({ 'login': log }, function (err, result) {
		if (err) {
			console.log("Ошибка! -> " + err);
		} else if (result.length !== 0) {
			console.log("я выбираю роль");
			if (result[0].pos == 'Пользователь') {
				res.sendfile('./client/user.html');
			}
			else if (result[0].pos == 'Администратор') {
				console.log("я выбрал админа");
				res.sendfile('./client/admin.html');
			}
			if (result[0].pos == 'Модератор') {
				res.sendfile('./client/moder.html');
			}
		} else {
			res.send(404);
		}
	});
};

UsersController.createUser = function (req, res) {
	var login = req.params.login;
	console.log("Добавляем пользователя под именем -> " + login);
	users.find({ 'login': login }, function (err, result) {
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
			newUser.save(function (err, result) {
				console.log(err);
				if (err !== null) {
					res.json(500, err);
				} else {
					res.json(200, result);
					console.log("Добавление произошло успешно!");
				}
			});
		}
	});
};

UsersController.createModer = function (req, res) {
	var login = req.params.login;
	console.log("Добавляем модератора под именем -> " + login);
	users.find({ 'login': login }, function (err, result) {
		if (err) {
			console.log("Ошибка! -> " + err);
			res.send(500, err);
		} else if (result.length !== 0) {
			console.log("уже есть в системе");
			res.send(501, err);
		} else {
			var newUser = new users({
				"login": login,
				"pos": "Модератор"
			});
			newUser.save(function (err, result) {
				console.log(err);
				if (err !== null) {
					res.json(500, err);
				} else {
					res.json(200, result);
					console.log("Добавление произошло успешно!");
				}
			});
		}
	});
};

UsersController.delete = function (req, res) {
	var login = req.params.login;
	console.log("Удаляем пользователя под именем -> " + login);
	users.find({ 'login': login }, function (err, result) {
		if (err) {
			console.log("Ошибка! -> " + err);
			res.send(500, err);
		} else if (result.length !== 0) {
			users.deleteOne({ "login": login }, function (err, result) {
				if (err !== null) {
					console.log("Ошибка! -> " + err);
					res.json(500, err);
				} else {
					res.json(200, result);
					console.log("Удаление произошло успешно!");
				}
			});
		} else {
			console.log("Ошибка! -> " + err);
			res.status(404).send("Пользователя не существует!");
		}
	});
};

UsersController.edit = function (req, res) {
	var login = req.params.login;
	console.log("Изменяем пользователя под именем -> " + login);
	var new_login = { $set: { login: req.params.new_login } };
	users.updateOne({ 'login': login }, new_login, function (err, result) {
		if (err !== null) {
			console.log("Ошибка! -> " + err);
			res.send(500, err);
		} else {
			res.json(200, result);
			console.log("Удаление произошло успешно!");
		}
	});
}


UsersController.checkCart = function(req, res) {
	var login = req.params.login;
	console.log("Смотрим содержимое корзины пользователя под именем "+ login);
	users.find({ 'login': login }, function (err, result) {
		if (err) {
			console.log("Ошибка! -> " + err);
			res.send(500, err);
		} else if (result.length !== 0) {
			console.log(result);
			res.json(200, result);
		} else {
			console.log("Ошибка! -> " + err);
			res.status(404).send("У пользователя нет корзины");
		}
	})
};

UsersController.addToCart = function(req, res) {
	var login = req.params.name;
	var id = {$push: {cart:req.body._id}};
	var flag = true;

	console.log("Добавляем  книгу -> " + req.body._id + " от пользователя " + login);

	users.find({"cart" : req.body._id}, function(err, result) {
		for (const val of result) {
			if (val.login === login){
				flag = false;
			}
		}
		if (flag === true) {
			users.updateOne({"login": login}, id, function(err, user){
				if (err !== null) {
					console.log("Error! ->" + err);
					res.json(500, err);
				} else {
					console.log("Книга уже добавлена в корзину!");
					res.json(200, user);
				}
			});
		} else {
			console.log("Книга уже была добалена в корзину ранее!");
		}
	});
};

UsersController.deleteFromCart = function(req, res) {
	var login = req.params.name;
	var id = {$pull: {cart:req.body._id}};
	var flag = true;

	console.log("Удаляем книгу -> " + req.body._id + " от пользователя " + login);

	users.find({"cart" : req.body._id}, function(err, result) {
		console.log(result);
		for (const val of result) {
			if (val._id === id){
				flag = false;
			}
		}
		if (flag === true) {
			users.updateOne({"login": login}, id, function(err, user){
				if (err !== null) {
					console.log("Error! ->" + err);
					res.json(500, err);
				} else {
					console.log("Книга уже добавлена в корзину!");
					res.json(200, user);
				}
			});
		} else {
			console.log("Книга уже была добалена в корзину ранее!");
		}
	});
}

UsersController.deleteAllFromCart = function(req, res) {
	var login = req.params.name;
	var id = {$set: {cart: []}};
	var flag = true;

	console.log("Удаляем книгу -> " + req.body._id + " от пользователя " + login);

	// users.find({"cart" : req.body._id}, function(err, result) {
	// 	console.log(result);
	// 	for (const val of result) {
	// 		if (val._id === id){
	// 			flag = false;
	// 		}
	// 	}
		// if (flag === true) {
			users.updateOne({"login": login}, id, function(err, user){
				if (err !== null) {
					console.log("Error! ->" + err);
					res.json(500, err);
				} else {
					console.log("Книга уже добавлена в корзину!");
					res.json(200, user);
				}
			});
		// } else {
		// 	console.log("Книга уже была добалена в корзину ранее!");
		// }
	// });
}

module.exports = UsersController;