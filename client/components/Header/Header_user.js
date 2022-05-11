class Header {
	handlerOpenShoppingPage(arr) {
		shoppingPage.render(arr);
	}

	renderHeaderUser(count, arr) {
		const html = `
		<div class="header-container">
			<div class="header-container__logo">
				<p><a href="../../user.html"><img src="components/Header/img/book.png" width="42" height="42" alt="">
				<big>Добрейшие книжки</big></a></p>
			</div>
			<div class="header-search">
				 
		 			<input id="inputValue" class="header-search__input"  placeholder="Искать здесь...">
					<button class="header-search__btn"  id="btn_search"></button>
			</div>
			<div class="exit_div">
			<a class="exit" href="../../index.html"> Выйти </a>
			</div>
			<div class="header-counter" onclick="headerPageUser.handlerOpenShoppingPage('${arr}');">
				<p class="header-counter__fig">${count}</p>
				<img src="components/Header/img/basket.png" width="42" height="42" alt="">
			</div>
		</div>
		`;

		ROOT_HEADER.innerHTML = html;
	}
}

const headerPageUser = new Header();

