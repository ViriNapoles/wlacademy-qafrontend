import {Selector, t} from 'testcafe'

class CheckOutInformation{
    constructor(){
        this.pageTitle = Selector('.subheader')
        this.firstnameField = Selector('.checkout_info input[id="first-name"]')
        this.lastnameField = Selector('.checkout_info #last-name')
        this.zipCodeField = Selector('.checkout_info #postal-code')
        this.cancelButton = Selector('.checkout_buttons .cart_cancel_link.btn_secondary')
        this.continueButton = Selector ('.checkout_buttons .btn_primary.cart_button')
        this.errorMessage = Selector('h3[data-test="error"]')
    }

    async fillUserInformation(name, lastname, zipcode){
        if(name){
            await t.typeText(this.firstnameField, name)
            await t.typeText(this.lastnameField, lastname)
            await t.typeText(this.zipCodeField, zipcode)
        }
        await t.click(this.continueButton)
    }
}

export default new CheckOutInformation()