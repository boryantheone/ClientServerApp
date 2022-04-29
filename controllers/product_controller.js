//const bookShop = require("../models/product.js");

var Product = require("../models/product.js"),
	//Category = require("../models/category.js"),
	ProductsController = {};

	ProductsController.productList = function(req, res) {
		Product.find({}, function (err, result) {
			if (result.length === 0) {
			res.status(404).json({"result_length" : 0});
			}
			else {
				res.json(result);
			}
		});
	};

	ProductsController.showByCategory = function(req, res){
		var categor = req.params.category;
		if (categor == "fiction") {
			console.log("выбрали худ литературу");
		}
		Product.find({'type': categor}, function(err, result){
			if (err != null){
				console.log("Error! -> " + err);
				res.status(500).json(err);
			} else {
				if (result.length > 0) {
					res.status(200).json(result);
				} else {
					res.json(result);
				}
			}
		});
	}

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