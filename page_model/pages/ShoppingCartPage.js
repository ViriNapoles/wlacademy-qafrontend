import {Selector, t} from 'testcafe'

class ShoppingCart {
    constructor(){
        this.pageTitle = Selector ('#contents_wrapper .subheader').withText('Your Cart')
        this.shoppingCartButton = Selector ('.shopping_cart_container .shopping_cart_link.fa-layers.fa-fw')
        this.continueShoppingButton = Selector ('.cart_contents_container .btn_secondary')
        this.checkoutButton = Selector('.cart_contents_container .btn_action checkout_button')
        this.shoppingCarteBadge = Selector('.shopping_cart_container .shopping_cart_link.fa-layers.fa-fw .fa-layers-counter.shopping_cart_badge')
    }

    async navigateToShoppingCart(){
        await t.click(this.shoppingCartButton)
    }
}

export default new ShoppingCart() 