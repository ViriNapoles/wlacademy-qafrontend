import ProductsPage from '../pages/ProductsPage'
import ShoppingCart from '../pages/ShoppingCartPage'
import CheckOutInformation from '../pages/CheckOutInformationPage'
import CheckOutOverview from '../pages/CheckOutOverviewPage'
import { validUser } from '../data/Roles'

fixture('Checkout information fields')
    .beforeEach(async t =>{
        await t.useRole(validUser)
        await ProductsPage.addItem(0)
        await t.navigateTo('https://www.saucedemo.com/cart.html')
        await t.expect(ShoppingCart.pageTitle.exists).ok()
        await t.click(ShoppingCart.checkoutButton)
    })

test('Missing information chekout message', async t =>{
    await CheckOutInformation.fillUserInformation()
    await t.expect(CheckOutInformation.errorMessage.exists).ok()
})

test('Fill user information checkout', async t =>{
    await CheckOutInformation.fillUserInformation('Viri', 'Napoles', '77533')
    await t.expect(CheckOutOverview.pageTitle.exists).ok()
})