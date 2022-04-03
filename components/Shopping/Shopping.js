class Shopping {
	handleClear() {
		ROOT_SHOPPING.innerHTML = '';
	}

	render () {
		const productsStorage = localStorageUtil.getProducts();
		let htmlCatalog = '';
		let sumCatalog = 0;

		CATALOG.forEach(({id , name, author, price}) => {
			if (productsStore.indexOf(id) !== -1) {
				htmlCatalog += `
					<tr>
						<td class="shopping-container_element__name">  · ${name}</td>
						<td class="shopping-container_element__author">${author}</td>
						<td class="shopping-container_element__price">${price.toLocaleString()} RUB</td>
					</tr>
				`;
				sumCatalog += price;
			}
			else {
				<></>
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