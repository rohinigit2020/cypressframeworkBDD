import HeaderComponent from '../components/header.comp';

class ProductPage{

    get btnAddtoCart() {return cy.get("button[class='btn_primary btn_inventory']") }
    get btnRemove() { return cy.contains('REMOVE')}
    
    get lblPrice() {  return cy.get("div[class='inventory_details_price']")}

    clickAddtoCart(){
        this.storePrice()
        this.btnAddtoCart.click()
    }

    storePrice(){
        this.lblPrice.then($ele => {
            cy.wrap($ele.text()).as('price')
        })
    }

    chooseCart(){
        HeaderComponent.selectCart()
    }
}
export default new ProductPage()