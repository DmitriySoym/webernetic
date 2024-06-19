window.onload = function () {
    document.body.classList.add("loaded_hiding");
    window.setTimeout(function () {
        document.body.classList.add("loaded");
        document.body.classList.remove("loaded_hiding");
    }, 500);
};

document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".main__info-link");
    const modal = document.getElementById("myModal");

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            loginBtn.setAttribute("disabled", true);
            loginBtn.style = "opacity: 0.5;";
            generateLoginForm();
        });
    }

    function generateLoginForm() {
        modal.style.display = "block";
        const madalContent = document.querySelector(".main__modal-content");

        madalContent.innerHTML = `
            <form action="javascript:void(0);" method="POST" class="login-form">
                <div class="login-form__wrapper">
                    <h3 class="login-form__title">Войти в систему</h3>
                    <div class="login-form__input">
                        <input type="text" placeholder="Email/Телефон" name="login"/>
                    </div>
                    <div class="login-form__input">
                        <input type="password" placeholder="Пароль" name="password"/>
                    </div>
                    <div class="login-form__checkbox">
                    <input type="checkbox" id="checkbox" class="custom-checkbox" name="remember-password"/>
                        <label for="checkbox">
                            <span class="login-form__checkbox-text">Запомнить пароль </span>
                        </label>
                    </div>
                    <div class="login-form__link-wrapper">
                        <a href="javascript:void(0);" class="login-form__link">Восстановить</a>
                    </div>
                    <div class="login-form__btn">
                        <button type="submit" class="login-form__btn-login">Войти</button>
                        <button type="button" class="login-form__btn-register">Зарегестрироваться</button>
                    </div>
                </div>
            </form>
        `;

        const loginClose = document.querySelector(".main__close");

        if (loginClose) {
            loginClose.addEventListener("click", function () {
                modal.style.display = "none";
                loginBtn.removeAttribute("disabled");
                loginBtn.style = "opacity: 1;";
            });
        }
    }
});
