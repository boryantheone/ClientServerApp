class Shopping {
	handleClear() {
		ROOT_SHOPPING.innerHTML = '';
	}

	render () {
		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';
		let sumCatalog = 0;

		CATALOG.forEach(({_id , name, author, price}) => {
			if (productsStore.indexOf(_id) !== -1) {
				htmlCatalog += `
					<tr>
						<td class="shopping-container_element__name">  · ${name}</td>
						<td class="shopping-container_element__author">${author}</td>
						<td class="shopping-container_element__price">${price.toLocaleString()} RUB</td>
					</tr>
				`;
				sumCatalog += Number(price);
			}
		});
		const html = `
			<div class="shopping-container">
			<div class="shopping__close" onclick="shoppingPage.handleClear();"></div>
			<table>
				${htmlCatalog}
				<tr>
						<td class="shopping-container_element__name"> Сумма: </td>
						<td class="shopping-container_element__price">${sumCatalog.toLocaleString()} RUB</td>
				</tr>
			</table>
			</div>
		`;
		ROOT_SHOPPING.innerHTML = html;
	}
}

const shoppingPage = new Shopping();