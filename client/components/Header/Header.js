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


	render(count) {
		const html = `
		<div class="header-container">
			<div class="header-container__logo">
				<p><a href="../../index.html"><img src="components/Header/img/book.png" width="42" height="42" alt="">
				<big>Добрейшие книжки</big></a></p>
			</div>
			<div class="header-search">
				 
		 			<input id="inputValue" class="header-search__input"  placeholder="Искать здесь...">
					<button class="header-search__btn"  id="btn_search"></button>
			
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

