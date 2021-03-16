import ProductsPage from '../pages/ProductsPage'
import ShoppingCart from '../pages/ShoppingCartPage'
import { validUser } from '../data/Roles'

fixture('Shopping cart page testing')
    .beforeEach(async t =>{
        await t.useRole(validUser)
    })

test('Navigate to the shopping cart', async t =>{
    await t.expect(ProductsPage.pageTitle.exists).ok()
    await ShoppingCart.navigateToShoppingCart()
    await t.expect(ShoppingCart.pageTitle.exists).ok()
})