// var category = require("../models/category.js"),
// 	// Product = require("../models/product.js"),
// 	mongoose = require("mongoose");

// var CategoryController = {};

// CategoryController.index = function(req, res) {
// 	console.log('');
// 	category.find(function (err, categories) {
// 		if (err != null) {
// 			res.json(500, err);
// 		} else {
// 			res.status(200).json(categories);
// 		}
// 	});
// };

// CategoryController.show = function(req, res) {
// 	console.log('');
// 	var category = req.params.category;
// 	category.find({'category': req.category}, function(err, result) {
// 		if (err) {
// 			console.log(err);
// 		} else if (result.length !== 0) {
// 			console.log(result);
// 			res.sendFile('');
// 		} else {
// 			res.send(404);
// 		}
// 	});
// };