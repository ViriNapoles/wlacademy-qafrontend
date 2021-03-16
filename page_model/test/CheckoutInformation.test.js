import LoginPage from '../pages/LoginPage'
import CREDENTIALS from '../data/Constants'
import ProductsPage from '../pages/ProductsPage'
import ShoppingCart from '../pages/ShoppingCartPage'
import CheckOutInformation from '../pages/CheckOutInformationPage'
import CheckOutOverview from '../pages/CheckOutOverviewPage'

fixture('Checkout information fields')
    .page`https://www.saucedemo.com/`
    .beforeEach(async t =>{
        await LoginPage.userLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
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
    await CheckOutInformation.fillUserInformation('Viri','Napoles','77533')
    await t.expect(CheckOutOverview.pageTitle.exists).ok()
})
