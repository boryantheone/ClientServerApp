class LocalStorageUser {
	constructor() {
		this.keyName = 'products';
	}

	getProducts() {
		const productsLocalStorage = localStorage.getItem(this.keyName);
		if (productsLocalStorage != null) {
			return JSON.parse(productsLocalStorage);
		}
		return [];
	}

	async getProductsFromDB() {
		try {
			var cart = [];

			var list = document.location.href.split('/');
			var login = list[list.length - 2];
			console.log(login);

			$.get("/users/" + login + "/cart", function(result){
				console.log(result);
				cart = result.cart;
				console.log(cart);
				// const {_id, name, price} = cart.
			})
			if (cart.length !== 0) {
				return (cart);
			}
			return [];
		} catch(error) {
			console.log(error);
		}
	}

	async putProductsToCart() {
		try {
			let products = this.getProductsFromDB();
			let pushProduct = false;
			const index = products.indexOf(id);
		
			if (index === -1) {
				products.push(id);
				pushProduct = true;
			} else {
				products.splice(index, 1);
			}
	
			// localStorage.setItem(this.keyName, JSON.stringify(products));

			return{pushProduct, products}
		} catch(error) {
			console.log(error);
		}
	}

	putProducts(id) {
		let products = this.getProducts();
		let pushProduct = false;
		const index = products.indexOf(id);
		
		if (index === -1) {
			products.push(id);
			pushProduct = true;
		} else {
			products.splice(index, 1);
		}
	
		localStorageUser.setItem(this.keyName, JSON.stringify(products));

		return{pushProduct, products}
	}
}

const localStorageUser = new LocalStorageUser();
