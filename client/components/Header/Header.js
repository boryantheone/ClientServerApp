class Header {
	handlerOpenShoppingPage() {
		shoppingPage.render();
	}

	handlerOpenAuthorizePage() {
		authorizePage.renderEntry();
	}

	handlerOpenRegistrationPage() {
		authorizePage.renderRegistration();
	}

	search() {
		$(document).ready(function () {
		let htmlCatalog = '';
		var CATALOG = [];
		var request = $(".header-search__input").val();
		console.log(request);
		if (request != "") {
			$.get("/product_search/" + request, function (res) {
				$('.products-container').empty();
				console.log(res);
				if (res.length > 0) {
					CATALOG = res;
					CATALOG.forEach(({ name, author, price, img }) => {
						htmlCatalog += `
						<li class="products-elements">
							<span class="products-elements__name">${name}</span>
							<span class="products-elements__author">${author}</span>
							<img class="products-elements__img" src='${img}' />
							<span class="products-elements__price">
								💌${price.toLocaleString()} RUB
							</span>
							<button class="products-elements__btn" >Добавить в корзину</button>
						</li>
					`;
						$('.products-container').append(htmlCatalog);
					});
				}
				else {
					console.log("i hate js");
					var label = $('<img style="width: -webkit-fill-available;" src="https://incart.designmyshop.ru/wa-data/public/hub/upload/images/snimok-4.png">')
					$('.products-container').append(label);
				}
			})
			document.getElementById("inputValue").value = "";
		}
});

	}


	render(count) {
		const html = `
		<div class="header-container">
			<div class="header-container__logo">
				<p><a href="../../index.html"><img src="components/Header/img/book.png" width="42" height="42" alt="">
				<big>Добрейшие книжки</big></a></p>
			</div>
			<div class="header-search">
				 
		 			<input id="inputValue" class="header-search__input"  placeholder="Искать здесь...">
					<button class="header-search__btn"  id="btn_search" onclick="headerPage.search();"></button>
			
			</div>
			<div class="header-container_authorize">
				<button class="header-container_authorize__btn"  onclick="headerPage.handlerOpenAuthorizePage();">Вход</button>
				<span class="header-container__authorize-seporator">/</span>
				<button class="header-container_authorize__btn"  onclick="headerPage.handlerOpenRegistrationPage();">Регистрация</button>
			</div>
			<div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
				<p class="header-counter__fig">${count}</p>
				<img src="components/Header/img/basket.png" width="42" height="42" alt="">
			</div>
		</div>
		`;

		ROOT_HEADER.innerHTML = html;
	}
}

const headerPage = new Header();

