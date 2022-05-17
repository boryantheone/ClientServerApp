
function render() {

	productsPageUser.render();
}

let CATALOG = [];

$.get("/product", function (books) {
	CATALOG = books;
	render();
})

$(document).ready(function () {
	$("#header").on('click', '#btn_search', (function () {
		let htmlCatalog = '';
		var CATALOG = [];
		var request = $("#inputValue").val();
		console.log(request);
		if (request != "") {
			$.get("/product_search/" + request, function (res) {
				$('.products-container').empty();
				console.log(res);
				if (res.length > 0) {
					CATALOG = res;
					CATALOG.forEach(({ _id, name, author, price, img }) => {
						htmlCatalog += `
						<li class="products-elements">
							<span class="products-elements__name">${name}</span>
							<span class="products-elements__author">${author}</span>
							<img class="products-elements__img" src='${img}' />
							<span class="products-elements__price">
								💌${price.toLocaleString()} RUB
							</span>
							<button class="products-elements__btn" onclick="productsPageUser.pushToCart('${_id}')" >Добавить в корзину</button>
							<button id="btn_del" class="products-elements__btn" onclick="productsPageUser.deleteFromCart('${_id}');" >Удалить из корзины</button>
						</li>
					`;
						$('.products-container').append(htmlCatalog);
					});
				}
				else {
					console.log("По поиску ничего не найдено!");
					var label = $('<img style="width: -webkit-fill-available;" src="https://incart.designmyshop.ru/wa-data/public/hub/upload/images/snimok-4.png">')
					$('.products-container').append(label);
				}
			})
			document.getElementById("inputValue").value = "";
		}
	}));
});


