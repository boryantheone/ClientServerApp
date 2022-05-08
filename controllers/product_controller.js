var Product = require("../models/product.js"),
	//Category = require("../models/category.js"),
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

	ProductsController.productListUser = function(req, res) {
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

	ProductsController.showByCategoryUser = function(req, res){
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

	// ProductsController.index = function(req, res) {
	// 	var category_link = req.params.category_link || null,
	// 		respondWithProducts;
		
	// 	respondWithProducts = function(query) {
	// 		Product.find(query, function(err, Products){
	// 			if (err !== null) {
	// 				res.json(500, err);
	// 			} else {
	// 				res.status(200).json(Products);
	// 			}
	// 		});
	// 	};
		
	// 	if (category_link !== null) {
	// 		Category.find({"category": category}, function(err, result){
	// 			if (err !== null) {
	// 				res.json(500, err);
	// 			} else if (result.length === 0) {
	// 				res.status(404).json({"result_length" : 0});
	// 			} else {
	// 				respondWithProducts({"owner_category": result[0]._id});
	// 			}
	// 		});
	// 	} else {
	// 		respondWithProducts({});
	// 	}
	// };