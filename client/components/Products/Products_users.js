class Products {
	constructor() {
		this.classNameActive = 'products-elements__btn_active';
		this.labelAdd = 'Добавить в корзину';
		this.labelRemove = 'Удалить из корзины';
	}

	handleSetLocationStorage(element, _id) {
		const { pushProduct, products } = localStorageUtil.putProducts(_id);

		if (pushProduct) {
			element.classList.add(this.classNameActive);
			element.innerHTML = this.labelRemove;
		} else {
			element.classList.remove(this.classNameActive);
			element.innerHTML = this.labelAdd;
		}

		headerPageUser.renderHeaderUser(products.length);

	}

	returnProductsFromCart() {
		try {
			var cart = [];

			var list = document.location.href.split('/');
			var login = list[list.length - 2];
			console.log(login);

			$.get("/users/" + login + "/cart", function (result) {
				console.log(result);
				cart = result.cart;
				console.log(cart);
			})
			if (cart.length !== 0) {
				return (cart);
			}
			return [];
		} catch (error) {
			console.log(error);
		}
	}

	pushToCart(_id) {
	
		var list = document.location.href.split('/');
		var login = list[list.length - 2];
		console.log(login);


		$.post("/users/" + login + "/cart_add", {"cart" : _id}).done(function(response) {
			alert('Книга добавлена в корзину!');
		}).fail(function (jqXHR, textStatus, error) {
			console.log(error);
			alert("Ошибка!" + jqXHR.status + " " + jqXHR.textStatus);
			
		});

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
			const productsStore = localStorageUtil.getProducts();
			headerPageUser.renderHeaderUser(productsStore.length);
			productsPageUser.render();
		});
	}


	render() {
		// const this.returnProductsFromCart();
		// const productsStorage = localStorageUtil.getProducts();
		const productsStorage = this.returnProductsFromCart();
		let htmlCatalog = '';

		CATALOG.forEach(({ _id, name, author, price, img }) => {
			let activeClass = '';
			let activeText = '';

			if (productsStorage.indexOf(_id) === -1) {
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
					<button class="products-elements__btn${activeClass}" onclick="productsPageUser.pushToCart('${_id}');">${activeText}</button>
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
