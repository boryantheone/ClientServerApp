// var Cart = require("../models/cart.js"),
// 	User = require("../models/user.js"),
// 	mongoose = require("mongoose");

// var CartController = {};

// CartController.index = function (req, res) {
// 	console.log('все товары из корзины');
// 	var login = req.params.login || null, respondWithCart;
// 	respondWithCart = function (query) {
// 		Cart.find(query, function (err, products) {
// 			if (err != null) {
// 				res.json(500, err);
// 			} else {
// 				res.status(200).json(products);
// 			}
// 		});
// 	};
// 	if (login !== null) {
// 		console.log("Поиск пользователя: " + login);
// 		User.find({"login": login}, function(err, result) {
// 			if (err !== null) {
// 				res.json(500, err);
// 			} else if (result.length === 0) {
// 				res.status(404).json({"result_length": 0});
// 			} else {
// 				respondWithCart({"owner" : result[0]._id});
// 			}
// 		});
// 	} else {
// 		respondWithCart({});
// 	}
// };

// CartController.addToCart = function(req, res) {
// 	console.log("Adding to cart");
// 	var login = req.body.login || null;
// 	var newProduct = new Cart({
// 		"cart" : req.body.cart
// 	});

// 	console.log("login: " + login);

// 	User.find({"login" : login}, function(err, result) {
// 		if (err) {
// 			console.log(err);
// 			res.send(500, err);
// 		} else  {
// 			if (result.length === 0) {
// 				newProduct.owner = result[0]._id;
// 			}
// 			newProduct.save(function(err, result) {
// 				console.log(result);
// 				if (err !== null) {
// 					console.log(err);
// 					res.json(500, err);
// 				} else {
// 					res.status(200).json(result);
// 				}
// 			});
			
// 		}
// 	});
// };

// CartController.show = function(req, res) {
// 	var id = req.params.id;
// 	CartController.find({"_id": id}, function(err, products) {
// 		if (err !== null) {
// 			res.status(500).json(result);
// 		} else {
// 			if (products.length > 0) {
// 				res.status(200).json(products[0]);
// 			} else {
// 				res.send(404);
// 			}
// 		}
// 	});
// };

// CartController.deleteFromCart = function(req, res) {
// 	var id = req.params.id;
// }