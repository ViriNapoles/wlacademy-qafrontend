import LoginPage from '../pages/LoginPage'
import CREDENTIALS from '../data/Constants'
import ProductsPage from '../pages/ProductsPage'
import ShoppingCart from '../pages/ShoppingCartPage'

fixture('Adding items to the shopping cart')
    .page`https://www.saucedemo.com/`
    .beforeEach(async t => {
        await LoginPage.userLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('Add a single item to the shopping cart', async t=>{
    await t.expect(ProductsPage.pageTitle.exists).ok()
    await ProductsPage.addItem(0)
    await ShoppingCart.validateItem(0)
})

test('Add multiple items to the shopping cart', async t =>{
    await t.expect(ProductsPage.pageTitle.exists).ok()
    await ProductsPage.addItem(0)
    await ProductsPage.addItem(1)
    await ProductsPage.addItem(2)
    await ShoppingCart.validateItem(0)
    await ShoppingCart.validateItem(1)
    await ShoppingCart.validateItem(2)
})