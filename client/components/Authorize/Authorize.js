class Authorize {
	handleClear() {
		ROOT_AUTHORIZE.innerHTML = '';
	}

	renderRegistration() {
		const html = `
		<div class="registration-cssave">
		<form>
			<div class="registration__close" onclick="authorizePage.handleClear();"></div>
			   <h3 class="text-center">Регистрация</h3>
			 <div class="form-group">
			   <input class="form-control item" type="email" name="email" id="email" placeholder="Email" required>
			</div>
			<div class="form-group">
				<input class="form-control item" type="password" name="Пароль" minlength="6" id="password" placeholder="Пароль" required>
			</div>
			<div class="form-group">
				<button class="btn btn-primary btn-block create-account" type="submit">Зарегистрироваться</button>
			</div>
		</form>
	</div>
		`;
		ROOT_AUTHORIZE.innerHTML = html;
	}

	renderEntry() {
		const html = `
		<div class="registration-cssave">
    		<form>
				<div class="registration__close" onclick="authorizePage.handleClear();"></div>
       			<h3 class="text-center">Вход</h3>
				 <div class="form-group">
				   <input class="form-control item" type="email" name="email" id="email" placeholder="Email" required>
				</div>
        		<div class="form-group">
            		<input class="form-control item" type="password" name="Пароль" minlength="6" id="password" placeholder="Пароль" required>
        		</div>
        		<div class="form-group">
            		<button class="btn btn-primary btn-block create-account" type="submit">Вход в аккаунт</button>
        		</div>
    		</form>
		</div>
		`;
		ROOT_AUTHORIZE.innerHTML = html;
	}
}

const authorizePage = new Authorize();