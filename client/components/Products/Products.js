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
						<li><a class="product-widget__list-a" href="fiction">Художественная литература</a></li>
			  			<li><a class="product-widget__list-a" href="childrenBooks">Детские книги</a></li>
			  			<li><a class="product-widget__list-a" href="bookTeenagers">Книги для подростков</a></li>
						<li><a class="product-widget__list-a" href="businessLiterature">Бизнес-литература</a></li>
						<li><a class="product-widget__list-a" href="selfEducation">Самообразование и саморазвитие</a></li>
						<li><a class="product-widget__list-a" href="">Учебная литература</a></li>
						<li><a class="product-widget__list-a" href="">Хобби и досуг</a></li>
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
