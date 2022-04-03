class Products {
	constructor() {
		this.classNameActive = 'products-elements__btn_active';
		this.labelAdd = 'Добавить в корзину';
		this.labelRemove = 'Удалить из корзины';
	}

	handleSetLocationStorage(element, id) {
		const {pushProduct, products} = localStorageUtil.putProducts(id);
		
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

		CATALOG.forEach(({id , name, author, price, img}) => {
			let activeClass = '';
			let activeText = '';

			if (productsStorage.indexOf(id) === -1) {
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
					<button class="products-elements__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">${activeText}</button>
				</li>
			`;
		});
		const html = `
			<ul class="products-container">
				${htmlCatalog}
			</ul>
		`;

		ROOT_PRODUCTS.innerHTML = html;
	}
}

const productsPage = new Products();
productsPage.render();