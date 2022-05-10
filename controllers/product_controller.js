var Product = require("../models/product.js"),
	// go = require("../models/category.js"),
	ProductsController = {};

	ProductsController.productList = function(req, res) {
		Product.find({}, function (err, result) {
			if (result.length === 0) {
				res.status(404).json({"result_length" : 0});
			}
			else {
				console.log("Вы на главной странице!")
				res.json(result);
			}
		});
	};

	ProductsController.addBook = function(req, res) {
		var name = req.body.name;
		console.log("Модератор добавляет книгу ->" + name);
		Product.find({"name": name}, function(err, result) {
			if (err){
				console.log("Error! ->" + err);
				res.status(500).json(err); 
			} else if (result.length !== 0){
				console.log("Такой альбом уже есть!");
				res.status(501).send("Такой альбом уже есть!");
			} else {
				var book = new Product({"_id": req.body._id,"name": req.body.name, "author": req.body.author, "img": req.body.img, "price": req.body.price, "category": req.body.category });
				book.save(function(err, result) {
					if (err != null){
						console.log("Error! -> "+ err);
						res.json(500, err);
					} else {
						res.json(200, result);
						console.log("Добавление произошло успешно!");
					}
				});
			}
		});
	};

	ProductsController.deleteBook = function(req, res) {
		var name = req.params.name;
		console.log("Модератор удаляет книгу -> " + name);
		Product.find({"name": name}, function(err, result){
			if (err){
				console.log("Error! ->" + err);
				res.status(500).json(err);
			} else if (result.length !== 0){
				Product.deleteOne({"name": name}, function(err, book){
					if (err !== null){
						console.log("Error! ->" + err);
						res.status(500).json(err);
					} else {
						res.status(200).json(book);
					}
				});
			} else {
				res.status(404).send("Такой книги нет!");
				console.log("Error! ->" + err);
			}
		});
	};

	ProductsController.updateBook = function(req, res) {
		console.log("Модератор изменяет поля книги -> " + req.body.name);
		Product.updateOne({"name": req.body.name}, {"_id": req.body._id,"name": req.body.name, "author": req.body.author, "img": req.body.img, "price": req.body.price, "category": req.body.category }, function(err, result){
			if (err !== null) {
				console.log("Error! -> " + err);
				res.json(500, err);
			} else {
				res.json(200, result);
			}
		});
	};

	

	ProductsController.showByCategory = function(req, res){
		var categoryLink = req.params.category
		Product.find({'category': req.params.category}, function(err, result){
			if (err != null){
				console.log("Error! -> " + err);
				res.status(500).json(err);
			} else {
				if (result.length > 0) {
					// console.log(result);
					console.log("Вы выбрали категорию " + " " + categoryLink);
					res.status(200).json(result);
				} else {
					console.log("Нет результатов по данной категории");
					res.send(400);
				}
			}
		});
	};


	ProductsController.search = function(req, res) {
		var search_req = req.params.name;
		console.log("Клиент ищет книги автора -> " + search_req)
		Product.find({'name': search_req}, function(err, result){
			if (err != null){
				console.log("Error! -> " + err);
				res.status(500).json(err);
			} else {
				if (result.length > 0) {
					console.log("Вы выполнили поиск!");
					res.status(200).json(result);
				} else {
					res.status(200).json(result);
				}
			}
		});
	};

	

module.exports = ProductsController;

	