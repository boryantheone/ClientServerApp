class Products {
	constructor() {
		this.classNameActive = 'products-elements__btn_active';
		this.labelAdd = 'Добавить в корзину';
		this.labelRemove = 'Удалить из корзины';
	}

	// handleSetLocationStorage(element, _id) {
	// 	const { pushProduct, products } = this.returnProductsFromCart(_id);

	// 	if (pushProduct) {
	// 		element.classList.add(this.classNameActive);
	// 		element.innerHTML = this.labelRemove;
	// 	} else {
	// 		element.classList.remove(this.classNameActive);
	// 		element.innerHTML = this.labelAdd;
	// 	}

	// 	headerPageUser.renderHeaderUser(products.length);

	// }

	returnProductsFromCart() {
		var cartUser = [];

		var list = document.location.href.split('/');
		var login = list[list.length - 2];

		$.get("/users/" + login + "/cart", function (result) {

			var cartLen = result[0].cart.length;
			for (var i = cartLen - 1; i >= 0; i--) {
				cartUser.push(result[0].cart[i]);
			}
			headerPageUser.renderHeaderUser(cartUser.length, cartUser);
			
		})
		return (cartUser);
	}

	pushToCart(_id) {

		var list = document.location.href.split('/');
		var name = list[list.length - 2];

		$.ajax({
			'url': '/users_cart/' + name,
			'type': 'PUT',
			"data": { "_id": _id }
		}).done(function (responde) {
			alert('Thank you!');
		});
		this.returnProductsFromCart();
		// console.log("gtd fdf:" + userCart)
		// headerPageUser.renderHeaderUser(userCart.length, cartUser);
		location.reload();
	}

	deleteFromCart(_id) {

		var list = document.location.href.split('/');
		var name = list[list.length - 2];

		$.ajax({
			'url': '/users_cart_del/' + name,
			'type': 'PUT',
			"data": { "_id": _id }
		}).done(function (responde) {
			alert('Книга удалена!');
		}).fail(function(response){
			alert("Такой книги нет в корзине!");
		});
		var userCart = this.returnProductsFromCart();
		console.log("delete:" + userCart);
		headerPageUser.renderHeaderUser(userCart.length, userCart);
		location.reload();
	}

	handleCategory1() {
		var catalog = $('.products-container'),
			categoryLink = $('.product-widget__list-a-1').attr('category-filter');

		console.log(categoryLink)
		$('.products-container').empty();

		$.get("/product/" + categoryLink, function (result) {
			CATALOG = [];
			CATALOG = result;
			console.log(result);
			const productsStore = localStorageUtil.getProducts();
			headerPageUser.renderHeaderUser(productsStore.length);
			productsPageUser.render();
		});
	}

	handleCategory2() {
		var catalog = $('.products-container'),
			categoryLink = $('.product-widget__list-a-2').attr('category-filter');

		console.log(categoryLink)
		$('.products-container').empty();

		$.get("/product/" + categoryLink, function (result) {
			CATALOG = [];
			CATALOG = result;
			console.log(result);
			const productsStore = localStorageUtil.getProducts();
			headerPageUser.renderHeaderUser(productsStore.length);
			productsPageUser.render();
		});
	}

	handleCategory3() {
		var catalog = $('.products-container'),
			categoryLink = $('.product-widget__list-a-3').attr('category-filter');

		console.log(categoryLink)
		$('.products-container').empty();

		$.get("/product/" + categoryLink, function (result) {
			CATALOG = [];
			CATALOG = result;
			console.log(result);
			const productsStore = localStorageUtil.getProducts();
			headerPageUser.renderHeaderUser(productsStore.length);
			productsPageUser.render();
		});
	}

	handleCategory4() {
		var catalog = $('.products-container'),
			categoryLink = $('.product-widget__list-a-4').attr('category-filter');

		console.log(categoryLink)
		$('.products-container').empty();

		$.get("/product/" + categoryLink, function (result) {
			CATALOG = [];
			CATALOG = result;
			console.log(result);
			const productsStore = localStorageUtil.getProducts();
			headerPageUser.renderHeaderUser(productsStore.length);
			productsPageUser.render();
		});
	}

	handleCategory5() {
		var catalog = $('.products-container'),
			categoryLink = $('.product-widget__list-a-5').attr('category-filter');

		console.log(categoryLink)
		$('.products-container').empty();

		$.get("/product/" + categoryLink, function (result) {
			CATALOG = [];
			CATALOG = result;
			console.log(result);
			const productsStore = localStorageUtil.getProducts();
			headerPageUser.renderHeaderUser(productsStore.length);
			productsPageUser.render();
		});
	}

	handleCategory6() {
		var catalog = $('.products-container'),
			categoryLink = $('.product-widget__list-a-6').attr('category-filter');

		console.log(categoryLink)
		$('.products-container').empty();

		$.get("/product/" + categoryLink, function (result) {
			CATALOG = [];
			CATALOG = result;
			console.log(result);
			const productsStore = localStorageUtil.getProducts();
			headerPageUser.renderHeaderUser(productsStore.length);
			productsPageUser.render();
		});
	}

	handleCategory7() {
		var catalog = $('.products-container'),
			categoryLink = $('.product-widget__list-a-7').attr('category-filter');

		console.log(categoryLink)
		$('.products-container').empty();

		$.get("/product/" + categoryLink, function (result) {
			CATALOG = [];
			CATALOG = result;
			console.log(result);
			const productsStore = this.returnProductsFromCart();
			headerPageUser.renderHeaderUser(productsStore.length);
			productsPageUser.render();
		});
	}


	render() {
		const productsStore = this.returnProductsFromCart();
		headerPageUser.renderHeaderUser(productsStore.length, productsStore);
		let htmlCatalog = '';

		CATALOG.forEach(({ _id, name, author, price, img }) => {
			let activeClass = '';
			let activeText = '';

			if (productsStore.indexOf(_id) === -1) {
				activeText = this.labelAdd;
			} else {
				activeClass = ' ' + this.classNameActive;
				activeText = this.labelRemove;
			}

			htmlCatalog += `
				<li class="products-elements">
					<span class="products-elements__name">${name}</span>
					<span class="products-elements__author">${author}</span>
					<img class="products-elements__img" src='${img}' />
					<span class="products-elements__price">
						💌${price.toLocaleString()} RUB
					</span>
					<button id="btn_buy" class="products-elements__btn" onclick="productsPageUser.pushToCart('${_id}');" >Добавить в корзину</button>
					<button id="btn_del" class="products-elements__btn" onclick="productsPageUser.deleteFromCart('${_id}');" >Удалить из корзины</button>
				</li>
			`;
		});
		const html = `
			<div class="products-main">
				<div class="product-widget">
					<h3 class="product-widget__title" style="text-align: center;">Категории</h3>
					<ul class="product-widget__list">
						<li><button class="product-widget__list-a-1" category-filter="fiction" onclick="productsPageUser.handleCategory1();">Художественная литература</button></li>
			  			<li><button class="product-widget__list-a-2" category-filter="childrenBooks" onclick="productsPageUser.handleCategory2();">Детские книги</button></li>
			  			<li><button class="product-widget__list-a-3" category-filter="bookTeenagers"  onclick="productsPageUser.handleCategory3();">Книги для подростков</button></li>
						<li><button class="product-widget__list-a-4" category-filter="businessLiterature"  onclick="productsPageUser.handleCategory4();">Бизнес-литература</button></li>
						<li><button class="product-widget__list-a-5" category-filter="selfEducation"  onclick="productsPageUser.handleCategory5();">Самообразование и саморазвитие</button></li>
						<li><button class="product-widget__list-a-6" category-filter="eduBooks"  onclick="productsPageUser.handleCategory6();">Учебная литература</button></li>
						<li><button class="product-widget__list-a-7" category-filter="hobbyBooks"  onclick="productsPageUser.handleCategory7();">Хобби и досуг</button></li>
					</ul>
		 		</div>
				<ul class="products-container">
					${htmlCatalog}
				</ul>
			</div>
		`;


		ROOT_PRODUCTS.innerHTML = html;
	}
}

const productsPageUser = new Products();
