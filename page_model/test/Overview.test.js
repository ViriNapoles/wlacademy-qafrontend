import ProductsPage from '../pages/ProductsPage'
import ShoppingCart from '../pages/ShoppingCartPage'
import CheckOutInformation from '../pages/CheckOutInformationPage'
import CheckOutOverview from '../pages/CheckOutOverviewPage'
import FinishedPurchase from '../pages/FinishPage'
import { validUser } from '../data/Roles'
import { BASE_URL } from '../data/Constants'

fixture('Checkout information fields')
    .beforeEach(async t =>{
        await t.useRole(validUser)
        await ProductsPage.addItem(0)
        await t.navigateTo(`${BASE_URL}/cart.html`)
    })

test('Validate items in cart and overview', async t =>{
    await t.click(ShoppingCart.checkoutButton)
    await CheckOutInformation.fillUserInformation('Viri', 'Napoles', '77533')
    await CheckOutOverview.validateItem(0)
})

test('Complete a purchase', async t =>{
    await CheckOutOverview.validateItem(0)
    await t
        .click(CheckOutOverview.finishButton)
        .expect(FinishedPurchase.pageTitle.exists).ok()
})