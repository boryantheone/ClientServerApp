class Shopping {
	handleClear() {
		ROOT_SHOPPING.innerHTML = '';
	}

	freeCart() {
		var list = document.location.href.split('/');
		var name = list[list.length - 2];

		$.ajax({
			'url': '/users_cart_del_all/' + name,
			'type': 'PUT'
		}).done(function (responde) {
			alert('Заказ будет доставлен по адресу завтра в 12:00!');
		});
		productsPageUser.returnProductsFromCart();
		$('.order_info').empty();
		location.reload();
	}

	render (arr) {
		const productsStore = arr;
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
			<div class="cart_name">Ваша корзина</div>
			<div class="shopping__close" onclick="shoppingPage.handleClear();"></div>
			<div class="order_info">
			<table class="cart_table">
				${htmlCatalog}
				<tr>
						<td class="shopping-container_element__name"> Сумма: </td>
						<td class="shopping-container_element__price">${sumCatalog.toLocaleString()} RUB</td>
				</tr>
			</table>
			<div class="label_cart">Наш магазин доставляет заказы курьерской службой СДЭК! Выберите подходящий для вас адрес!</div>
			<select class="list_select">
				<option>Россия, Республика Татарстан, Казань, улица Галиаскара Камала, 18</option>
				<option>Россия, Республика Татарстан, Казань, Вахитовский район, Большая Красная улица, 53</option>
				<option>Россия, Республика Татарстан, Казань, проспект Победы, 142</option>
				<option>Россия, Республика Татарстан, Казань, проспект Ямашева, 49</option>
				<option>Россия, Республика Татарстан, Казань, улица Маршала Чуйкова, 55</option>
			</select>
			<input class="input_fio" placeholder="Введите ФИО" type="text"></input>
			<button class="to_order" onclick="shoppingPage.freeCart();">Сделать заказ</button>
			</div>
			</div>
		`;
		ROOT_SHOPPING.innerHTML = html;
	}
}

const shoppingPage = new Shopping();