import LoginPage from '../pages/LoginPage'
import CREDENTIALS from '../data/Constants'
import ProductsPage from '../pages/ProductsPage'
import ShoppingCart from '../pages/ShoppingCartPage'
import CheckOutInformation from '../pages/CheckOutInformationPage'
import CheckOutOverview from '../pages/CheckOutOverviewPage'
import FinishedPurchase from '../pages/FinishPage'

fixture('Checkout information fields')
    .page`https://www.saucedemo.com/`
    .beforeEach(async t =>{
        await LoginPage.userLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await ProductsPage.addItem(0)
        await t.navigateTo('https://www.saucedemo.com/cart.html')
    })

test('Validate items in cart and overview', async t =>{
    await t.click(ShoppingCart.checkoutButton)
    await CheckOutInformation.fillUserInformation('Viri', 'Napoles', '77533')
    await CheckOutOverview.validateItem(0)
})

test('Complete a purchase', async t =>{
    await CheckOutOverview.validateItem(0)
    await t.click(CheckOutOverview.finishButton)
    await t.expect(FinishedPurchase.pageTitle.exists).ok()
})