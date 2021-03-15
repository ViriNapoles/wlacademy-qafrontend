import LoginPage from '../pages/LoginPage'
import CREDENTIALS from '../data/Constants'
import ProductsPage from '../pages/ProductsPage'

fixture('Logout page testing')
    .page`https://www.saucedemo.com/`
    .beforeEach(async t => {
        await LoginPage.userLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('Logout from products page', async t => {
    await ProductsPage.logoutUser()
})
