var express = require("express"),
	http = require("http"),
	// импортируем библиотеку mongoose
	mongoose = require("mongoose"),
	app = express();
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

// Это модель) в папку part7 . Нам понадобится файл package.json , где Mongoose для задач
var bookSchema = mongoose.Schema({
	_id: String,
	name: String,
	author: String,
	img: String,
	price: String,
	category: String
});
var bookShop = mongoose.model("bookShop", bookSchema, "books");
http.createServer(app).listen(3000);
console.log("Server start 3000")


app.get("/catalog.json", function (req, res) {
	bookShop.find({}, function (err, CATALOG) {
		console.log(CATALOG);
		res.json(CATALOG);
	});
});

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

app.use(express.static('../client'))
app.use('/css', express.static(__dirname + '/styles/css'))
// app.use(express.static(__dirname))
app.use(express.json())

app.set('views', '../client/views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
	res.render('main')
})