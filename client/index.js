
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

$.get("/books/" + "selfEducation", function(books){
	console.log(books);
	$('.products-container').empty();
	
});