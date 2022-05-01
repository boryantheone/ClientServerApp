var express = require("express"),
	http = require("http"),
	mongoose = require("mongoose"),
	app = express(), //it's my server
	// categoryController = require("../controllers/category_controller"),
	productController = require("./controllers/product_controller");
// настраиваем приложение для использования клиентской папки для статичных файлов

app.use(express.static(__dirname + "/client"));
app.use(express.urlencoded());

// подключаемся к хранилищу данных Amazeriffic в Mongo
mongoose.connect('mongodb://localhost/book_shop', {
	useNewUrlParser: true,
	useUnifiedTopology: true 
}).then(res => {
	console.log("DB connect")
}).catch(err => {
	console.log(Error, err.message);
});

http.createServer(app).listen(3000);

console.log("Server start 3000")

app.get("/product", productController.productList);
app.get("/product/:category", productController.showByCategory);
// app.get("/product/:id", productController.show); 
// app.post("/product", productController.create);
// app.put("/product/:id", productController.update);
// app.delete("/product/:id", productController.destroy);

// app.get("/category.json", categoryController.index);
// app.post("/category", categoryController.create);
// app.get("/category/:category_link", categoryController.show);
// app.put("/category/:category_link", categoryController.update);
// app.delete("/category/:category_link", categoryController.destroy);

// app.get("/category/:category/product.json", productController.index);
// app.post("/category/:category/product", productController.create);
// app.put("/category/:category/product/:id", productController.update);
// app.delete("/category/:category/product/:id", productController.destroy);

// app.get("/catalog/:category", function (req, res) {
// 	bookShop.find({ category: req.params.category }, function (err, CATALOG) {
// 		console.log(CATALOG);
// 		res.json(CATALOG);
// 	});
// });
// app.post("/", function (req, res) {
// 	console.log(req.body);
// 	var newToDo = new ToDo({
// 		"description": req.body.description,
// 		"tags": req.body.tags
// 	});
// 	newToDo.save(function (err, result) {
// 		if (err !== null) {
// 			console.log(err);
// 			res.send("ERROR");
// 		} else {
// 			// клиент ожидает, что будут возвращены все задачи,
// 			// поэтому для сохранения совместимости сделаем дополнитель) в папку part7 . Нам понадобится файл package.json , гденый запрос
// 			ToDo.find({}, function (err, result) {
// 				if (err !== null) {
// 					// элемент не был сохранен
// 					res.send("ERROR");
// 				}
// 				res.json(result);
// 			});
// 		}
// 	});
// });

// app.use(express.static('../client'))
// app.use('/css', express.static(__dirname + '/styles/css'))
// // app.use(express.static(__dirname))
// app.use(express.json())

// app.set('views', '../client/views')
// app.set('view engine', 'ejs')

// app.get('/books/:category', (req, res) => {
// 	var category = req.params.category;
// 	bookShop.find({ "category":  category }, function (err,  result) {
// 		if (err !== null) {
// 			console.log("ERROR" + err);
// 			res.status(500).json(err);
// 		} else {
// 			if (result.length > 0) {
// 				res.status(200).json(result);
// 			} else {
// 				res.json(result);
// 			}
// 		}
// 	});
// })