function render () {
	const productsStore =  localStorageUtil.getProducts();
	
	headerPage.render(productsStore.length);
	productsPage.render();
}

let CATALOG = [];

fetch('/catalog.json')
	.then(res => res.json())
	.then(body => {
		CATALOG = body;
		if (CATALOG.length === 0){
			console.log("chto")
		}
		render();
	})
	.catch(error => {
		console.log("херня");
		console.log(error);
	});