
function render () {
	const productsStore =  localStorageUtil.getProducts();
	
	headerPage.render(productsStore.length);
	productsPage.render();
}

function render_category () {
	const productsStore =  localStorageUtil.getProducts();
	
	ROOT_SHOPPING.innerHTML = '';
	headerPage.render(productsStore.length);
	productsPage.render_category();
}


let CATALOG = [];

$.get("/product", function(books) {
	CATALOG = books;
	render();
})

// $.get("/product/fiction", function(books){
// 	console.log("xsudjsdfd");
// 	$('.products-container').empty();
	
// });