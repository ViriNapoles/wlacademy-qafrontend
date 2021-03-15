import { Selector, t } from 'testcafe'

class LoginPage {
    constructor() {
        this.pageTitle = Selector('.login_logo')
        this.usernameField = Selector('input[name="user-name"]')
        this.passwordField = Selector('input[name="password"]')
        this.loginButton = Selector('.login-box form input[class="btn_action"]')
        this.errorMessage = Selector('h3[data-test="error"]')
    }

    async userLogin(username, password) {
        await t.typeText(this.usernameField, username)
        await t.typeText(this.passwordField, password)
        await t.click(this.loginButton)
    }
}

export default new LoginPage()