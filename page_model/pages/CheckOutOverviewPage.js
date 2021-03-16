import {Selector, t} from 'testcafe'

class CheckOutOverview{
    constructor(){
        this.pageTitle = Selector('.subheader')
    }
}

export default new CheckOutOverview()