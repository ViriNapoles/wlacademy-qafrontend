import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CREDENTIALS from '../data/Constants'

fixture('Login page testing')
    .page`https://www.saucedemo.com/`

test('Login with valid credentials', async t => {
    await LoginPage.userLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductsPage.pageTitle.exists).ok()
})

test('Login with invalid credentials', async t => {
    await LoginPage.userLogin(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(ProductsPage.pageTitle.exists).notOk()
})