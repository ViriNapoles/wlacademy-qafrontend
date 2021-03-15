import LoginPage from '../pages/LoginPage'
import CREDENTIALS from '../data/Constants'
import ProductsPage, {ADD_LABEL, REMOVE_LABEL} from '../pages/ProductsPage'
import ShoppingCart from '../pages/ShoppingCartPage'

fixture('Adding items to the shopping cart')
    .page`https://www.saucedemo.com/`
    .beforeEach(async t => {
        await LoginPage.userLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('Add a single item to the shopping cart', async t=>{
    await t
        .expect(ProductsPage.pageTitle.exists).ok()
        .expect(ProductsPage.itemButton01.innerText).contains(ADD_LABEL)
        .click(ProductsPage.itemButton01)
        .expect(ProductsPage.itemButton01.innerText).contains(REMOVE_LABEL)
        .expect(ShoppingCart.shoppingCarteBadge.exists).ok()
})