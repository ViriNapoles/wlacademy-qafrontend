import {Selector, t} from 'testcafe'
import { BASE_URL } from '../data/Constants'
import ShoppingCart from '../pages/ShoppingCartPage'

class CheckOutOverview{
    constructor(){
        this.pageTitle = Selector('.subheader')
        this.overviewItemName = Selector('.cart_list .cart_item .inventory_item_name')
        this.cancelButton = Selector('.cart_footer .cart_cancel_link.btn_secondary')
        this.finishButton = Selector('.cart_footer .btn_action.cart_button')

    }
    
    async validateItem(itemPosition){
        await t.navigateTo(`${BASE_URL}/cart.html`)
        const itemName = await ShoppingCart.itemName.nth(itemPosition).innerText
        await t
            .navigateTo(`${BASE_URL}/checkout-step-two.html`)
            .expect(this.overviewItemName.nth(itemPosition).innerText).contains(itemName)
    }
}

export default new CheckOutOverview()