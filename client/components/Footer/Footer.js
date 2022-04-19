class Footer {

	render() {
		const html = `
		<footer>
        <div class="footer">
            <div class="footer-info">
                <h5><big>Контактная информация</big></h5>
                <p>📚Добрейшие книжки📚</p>
                <p>▪️555 50-я улица</p>
                <p>▪️Татарстан, Казань 28801</p>
				<p>▪️89534086854</p>
				<p>▪️bookshop@mail.ru</p>
            </div>
            <div class="footer-contact">
                <h5><big>Присоединяйтесь к нам в соцсетях</big></h5>
                <ul class="footer-social-icons">
                    <li><a class="footer-social-icon-vk" href="#" title="..." target="_blank" rel="noopener"><img src="components/Footer/img/vk.png"></a></li>
                    <li><a class="footer-social-icon-telegram" href="#" title="..." target="_blank" rel="noopener"><img src="components/Footer/img/tg.png"></a></li>
                </ul>
            </div>
       		</div>
   		</footer>
		`;

		ROOT_FOOTER.innerHTML = html;
	}
}

const footerPage = new Footer();

footerPage.render();