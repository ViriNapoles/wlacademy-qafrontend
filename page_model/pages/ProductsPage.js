import { Selector } from 'testcafe'

class ProductsPage {
    constructor(){
        this.pageTitle = Selector('#inventory_container div[class="product_label"]')
        
    }
}

export default new ProductsPage()