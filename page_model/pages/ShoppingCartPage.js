import {Selector, t} from 'testcafe'
import { BASE_URL } from '../data/Constants'

class ShoppingCart {
    constructor(){
        this.pageTitle = Selector ('#contents_wrapper .subheader').withText('Your Cart')
        this.shoppingCartButton = Selector ('.shopping_cart_container .shopping_cart_link.fa-layers.fa-fw')
        this.continueShoppingButton = Selector ('.cart_contents_container .btn_secondary')
        this.checkoutButton = Selector('.cart_contents_container .btn_action.checkout_button')
        this.itemName = Selector ('.inventory_item_name')
        this.cartItemName = Selector('.cart_list .cart_item .inventory_item_name')
    }

    async navigateToShoppingCart(){
        await t.click(this.shoppingCartButton)
    }

    async validateItem(itemPosition){
        const itemName = await this.itemName.nth(itemPosition).innerText
        await t
            .navigateTo(`${BASE_URL}/cart.html`)
            .expect(this.cartItemName.nth(itemPosition).innerText).contains(itemName)
            .navigateTo(`${BASE_URL}/inventory.html`)
    }

}

export default new ShoppingCart() 