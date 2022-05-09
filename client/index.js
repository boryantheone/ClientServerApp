
function render() {
	const productsStore = localStorageUtil.getProducts();

	headerPage.render(productsStore.length);
	productsPage.render();
}

let CATALOG = [];

$.get("/product", function (books) {
	CATALOG = books;
	render();
})





