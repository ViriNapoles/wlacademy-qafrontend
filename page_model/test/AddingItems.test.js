import LoginPage from '../pages/LoginPage'
import CREDENTIALS from '../data/Constants'
import ProductsPage, {ADD_LABEL, REMOVE_LABEL} from '../pages/ProductsPage'
import ShoppingCart, { NAME_ITEM01, NAME_ITEM02, NAME_ITEM03 } from '../pages/ShoppingCartPage'

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
        .navigateTo('https://www.saucedemo.com/cart.html')
        .expect(ShoppingCart.itemName01.innerText).contains(NAME_ITEM01)
})

test('Add multiple items to the shopping cart', async t =>{
    await t
        .expect(ProductsPage.pageTitle.exists).ok()
        .expect(ProductsPage.itemButton01.innerText).contains(ADD_LABEL)
        .click(ProductsPage.itemButton01)
        .expect(ProductsPage.itemButton02.innerText).contains(ADD_LABEL)
        .click(ProductsPage.itemButton02)
        .expect(ProductsPage.itemButton03.innerText).contains(ADD_LABEL)
        .click(ProductsPage.itemButton03)
        .expect(ShoppingCart.shoppingCarteBadge.innerText).contains('3')
        .navigateTo('https://www.saucedemo.com/cart.html')
        .expect(ShoppingCart.itemName01.innerText).contains(NAME_ITEM01)
        .expect(ShoppingCart.itemName02.innerText).contains(NAME_ITEM02)
        .expect(ShoppingCart.itemName03.innerText).contains(NAME_ITEM03)
})