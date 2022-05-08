class Products {
	constructor() {
		this.classNameActive = 'products-elements__btn_active';
		this.labelAdd = 'Добавить в корзину';
		this.labelRemove = 'Удалить из корзины';
	}

	handleSetLocationStorage(element, _id) {
		const {pushProduct, products} = localStorageUtil.putProducts(_id);
		
		if (pushProduct) {
			element.classList.add(this.classNameActive);
			element.innerHTML = this.labelRemove;
		} else {
			element.classList.remove(this.classNameActive);
			element.innerHTML = this.labelAdd;
		}

		headerPage.render(products.length);

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
				headerPage.render(productsStore.length);
				productsPage.render();
		});
	}

	handleCategory2() {
		var catalog = $('.products-container'),
			categoryLink = $('.product-widget__list-a-2').attr('category-filter');

		console.log(categoryLink)
		$('.products-container').empty();

		$.get("/product/" + categoryLink, function (result) {
				CATALOG = result;
				console.log(result);
				const productsStore = localStorageUtil.getProducts();
				headerPage.render(productsStore.length);
				productsPage.render();
		});
	}

	handleCategory3() {
		var catalog = $('.products-container'),
			categoryLink = $('.product-widget__list-a-3').attr('category-filter');

		console.log(categoryLink)
		$('.products-container').empty();

		$.get("/product/" + categoryLink, function (result) {
				CATALOG = result;
				console.log(result);
				const productsStore = localStorageUtil.getProducts();
				headerPage.render(productsStore.length);
				productsPage.render();
		});
	}

	handleCategory4() {
		var catalog = $('.products-container'),
			categoryLink = $('.product-widget__list-a-4').attr('category-filter');

		console.log(categoryLink)
		$('.products-container').empty();

		$.get("/product/" + categoryLink, function (result) {
				CATALOG = result;
				console.log(result);
				const productsStore = localStorageUtil.getProducts();
				headerPage.render(productsStore.length);
				productsPage.render();
		});
	}

	handleCategory5() {
		var catalog = $('.products-container'),
			categoryLink = $('.product-widget__list-a-5').attr('category-filter');

		console.log(categoryLink)
		$('.products-container').empty();

		$.get("/product/" + categoryLink, function (result) {
				CATALOG = result;
				console.log(result);
				const productsStore = localStorageUtil.getProducts();
				headerPage.render(productsStore.length);
				productsPage.render();
		});
	}

	handleCategory6() {
		var catalog = $('.products-container'),
			categoryLink = $('.product-widget__list-a-6').attr('category-filter');

		console.log(categoryLink)
		$('.products-container').empty();

		$.get("/product/" + categoryLink, function (result) {
				CATALOG = result;
				console.log(result);
				const productsStore = localStorageUtil.getProducts();
				headerPage.render(productsStore.length);
				productsPage.render();
		});
	}

	handleCategory7() {
		var catalog = $('.products-container'),
			categoryLink = $('.product-widget__list-a-7').attr('category-filter');

		console.log(categoryLink)
		$('.products-container').empty();

		$.get("/product/" + categoryLink, function (result) {
				CATALOG = result;
				console.log(result);
				const productsStore = localStorageUtil.getProducts();
				headerPage.render(productsStore.length);
				productsPage.render();
		});
	}


	render() {
		const productsStorage = localStorageUtil.getProducts();
		let htmlCatalog = '';

		CATALOG.forEach(({_id , name, author, price, img}) => {
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
					<button class="products-elements__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${_id}');">${activeText}</button>
				</li>
			`;
		});
		const html = `
			<div class="products-main">
				<div class="product-widget">
					<h3 class="product-widget__title" style="text-align: center;">Категории</h3>
					<ul class="product-widget__list">
						<li><button class="product-widget__list-a-1" category-filter="fiction"  onclick="productsPage.handleCategory1();">Художественная литература</button></li>
			  			<li><button class="product-widget__list-a-2" category-filter="childrenBooks" onclick="productsPage.handleCategory2();">Детские книги</button></li>
			  			<li><button class="product-widget__list-a-3" category-filter="bookTeenagers"  onclick="productsPage.handleCategory3();">Книги для подростков</button></li>
						<li><button class="product-widget__list-a-4" category-filter="businessLiterature"  onclick="productsPage.handleCategory4();">Бизнес-литература</button></li>
						<li><button class="product-widget__list-a-5" category-filter="selfEducation"  onclick="productsPage.handleCategory5();">Самообразование и саморазвитие</button></li>
						<li><button class="product-widget__list-a-6" category-filter="eduBooks"  onclick="productsPage.handleCategory6();">Учебная литература</button></li>
						<li><button class="product-widget__list-a-7" category-filter="hobbyBooks"  onclick="productsPage.handleCategory7();">Хобби и досуг</button></li>
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

const productsPage = new Products();
