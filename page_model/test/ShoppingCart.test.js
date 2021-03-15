import LoginPage from '../pages/LoginPage'
import CREDENTIALS from '../data/Constants'
import ProductsPage from '../pages/ProductsPage'
import ShoppingCart from '../pages/ShoppingCartPage'

fixture('Shopping cart page testing')
    .page`https://www.saucedemo.com/`
    .beforeEach(async t =>{
        await LoginPage.userLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('Navigate to the shopping cart', async t =>{
    await t.expect(ProductsPage.pageTitle.exists).ok()
    await ShoppingCart.navigateToShoppingCart()
    await t.expect(ShoppingCart.pageTitle.exists).ok()
})