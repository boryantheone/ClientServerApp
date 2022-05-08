class Authorize {
	handleClear() {
		ROOT_AUTHORIZE.innerHTML = '';
	}

	enter() {
		$(document).ready(function () {
			console.log("gbplfw");
			// $('.btn_enter_account').on("click", function () {
				var login = $('.form-control-item').val();
				if (login != "") {
					$.ajax({
						'url': '/users/' + login,
						'type': 'GET'
					}).done(function (response) {
						window.location.replace('/users/' + login + '/');
					}).fail(function (jqXHR, textStatus, error) {
						console.log(error);
						alert("Ошибка!" + jqXHR.status + " " + jqXHR.textStatus);
					});
				}
			// });
		});
	}

	registr(){
		$(document).ready(function () {
			console.log("registr");
			// $('.btn_enter_account').on("click", function () {
				var login = $('#login_reg').val();
				console.log(login);
				if (login != "") {
					$.post("/signup/" + login, function(result)	{
						console.log(result);
					}).done(function (response) {
						console.log(response);
						alert('Аккаунт создан! ');
					}).fail(function (jqXHR, textStatus, error) {
						console.log(error);
						if (jqXHR.status === 501) {
							alert("Такой пользователь уже существует! ");
						} else {
							alert("Ошибка! " + jqXHR.status + " " + jqXHR.textStatus);
						}
					});
				}
			// });
		});
	}

	renderEntry() {
		const html = `
		<div class="registration-cssave">
				<div class="registration__close" onclick="authorizePage.handleClear();"></div>
       			<h3 class="text-center">Вход</h3>
				<div class="form-group">
				   <input class="form-control-item" type="text"  id="login_enter" placeholder="Login">
				</div>
        		<div class="form-group">
            		<button class="btn_enter_account" id="enter_btn" onclick="authorizePage.enter();">Вход в аккаунт</button>
        		</div>
		</div>
		`;
		ROOT_AUTHORIZE.innerHTML = html;
	}

	renderRegistration() {
		const html = `
		<div class="registration-cssave">
		<divclass="modal-content" >
			<div class="registration__close" id="close_div" onclick="authorizePage.handleClear();"></div>
			   <h3 class="text-center">Регистрация</h3>
			 <div class="form-group">
			   <input class="form-control-item" type="text"  id="login_reg" placeholder="Login">
			</div>
			<div class="form-group">
				<button class="btn_registr_account" id="registr_btn"onclick="authorizePage.registr();" >Зарегистрироваться</button>
			</div>
		</div>
	</div>
		`;
		ROOT_AUTHORIZE.innerHTML = html;
	}


}

const authorizePage = new Authorize();