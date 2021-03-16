import {Selector, t} from 'testcafe'

//export const NAME_ITEM01 = 'Sauce Labs Backpack'
//export const NAME_ITEM02 = 'Sauce Labs Bike Light'
//export const NAME_ITEM03 = 'Sauce Labs Bolt T-Shirt'

class ShoppingCart {
    constructor(){
        this.pageTitle = Selector ('#contents_wrapper .subheader').withText('Your Cart')
        this.shoppingCartButton = Selector ('.shopping_cart_container .shopping_cart_link.fa-layers.fa-fw')
        this.continueShoppingButton = Selector ('.cart_contents_container .btn_secondary')
        this.checkoutButton = Selector('.cart_contents_container .btn_action checkout_button')
        this.shoppingCarteBadge = Selector('.shopping_cart_container .shopping_cart_link.fa-layers.fa-fw .fa-layers-counter.shopping_cart_badge')
        //this.itemName01 = Selector ('.cart_list .cart_item .inventory_item_name').nth(0)
        //this.itemName02 = Selector ('.cart_list .cart_item .inventory_item_name').nth(1)
        //this.itemName03 = Selector ('.cart_list .cart_item .inventory_item_name').nth(2)
        this.itemName = Selector ('.inventory_item_name')
        this.cartItemName = Selector('.cart_list .cart_item .inventory_item_name')
    }

    async navigateToShoppingCart(){
        await t.click(this.shoppingCartButton)
    }

    async validateItem(itemPosition){
        const itemName = await this.itemName.nth(itemPosition).innerText
        // console.log({itemName})
        await t.navigateTo('https://www.saucedemo.com/cart.html')
        await t.expect(this.cartItemName.nth(itemPosition).innerText).contains(itemName)
        await t.navigateTo('https://www.saucedemo.com/inventory.html')
    }

}

export default new ShoppingCart() 