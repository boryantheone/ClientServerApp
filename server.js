const { search } = require("./controllers/product_controller");

var express = require("express"),
	http = require("http"),
	mongoose = require("mongoose"),
	app = express(), //it's my server
	// categoryController = require("../controllers/category_controller"),
	productController = require("./controllers/product_controller");
// настраиваем приложение для использования клиентской папки для статичных файлов

app.use(express.static(__dirname + "/client"));
app.use(express.urlencoded());
app.use(express.json());

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
app.get("/product_search/:name", productController.search);
// app.post("/product/:category", productController.showByCategory);
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
