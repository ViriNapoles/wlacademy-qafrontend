import {Selector, t} from 'testcafe'

class FinishedPurchase{
    constructor(){
        this.pageTitle = Selector('.checkout_complete_container .complete-header')
    }
}

export default new FinishedPurchase()