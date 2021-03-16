import ProductsPage from '../pages/ProductsPage'
import ShoppingCart from '../pages/ShoppingCartPage'
import { validUser } from '../data/Roles'

fixture('Adding items to the shopping cart')
    .beforeEach(async t => {
        await t.useRole(validUser)
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