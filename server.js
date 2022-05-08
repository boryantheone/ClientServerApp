var express = require("express"),
	http = require("http"),
	mongoose = require("mongoose"),
	app = express(), //it's my server
	// categoryController = require("../controllers/category_controller"),
	productController = require("./controllers/product_controller.js"),
	usersController = require("./controllers/users_controller.js");
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


app.get("/users/:login", usersController.show);
app.post("/signup/:login", usersController.createUser);

