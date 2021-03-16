import { Selector, t } from 'testcafe'
import LoginPage from './LoginPage'

export const ADD_LABEL = 'ADD TO CART'
export const REMOVE_LABEL = 'REMOVE'


class ProductsPage {
    constructor() {
        this.pageTitle = Selector('#inventory_filter_container div[class="product_label"]')
        this.burgerButton = Selector('#react-burger-menu-btn')
        this.burgerLogout = Selector('.bm-menu-wrap a[id="logout_sidebar_link"]').withText('Logout')
        this.itemButton = Selector('.inventory_item .pricebar .btn_inventory')     
    }

    async logoutUser() {
        await t
            .expect(this.pageTitle.exists).ok()
            .click(this.burgerButton)
            .click(this.burgerLogout)
            .expect(LoginPage.pageTitle.exists).ok()
    }

    async addItem(itemPosition) {
        await t
            .expect(this.itemButton.nth(itemPosition).innerText).contains(ADD_LABEL)
            .click(this.itemButton.nth(itemPosition))
            .expect(this.itemButton.nth(itemPosition).innerText).contains(REMOVE_LABEL)
    }
}

export default new ProductsPage()