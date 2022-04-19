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

	render (count) {
		const html = `
		<div class="header-container">
			<div class="header-container__logo">
				<img src="components/Header/img/book.png" width="42" height="42" alt="">
				<p><big>Добрейшие книжки</big></p>
			</div>
			<div class="header-search">
				<form class="header-search__form">
		 			<input class="header-search__input" type="text" placeholder="Искать здесь...">
					<button class="header-search__btn" type="submit"></button>
				</form>
			</div>
			<div class="header-container_authorize">
				<button class="header-container_authorize__btn" onclick="headerPage.handlerOpenAuthorizePage();">Вход</button>
				<span class="header-container__authorize-seporator">/</span>
				<button class="header-container_authorize__btn" onclick="headerPage.handlerOpenRegistrationPage();">Регистрация</button>
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

