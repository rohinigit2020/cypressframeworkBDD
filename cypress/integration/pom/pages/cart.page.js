class CartPage{
    get lblPrice() {return  cy.get("div[class='inventory_item_price']")}

    get btnCheckout() {return  cy.get("a[class='btn_action checkout_button']")}

    checkOut(){
        this.storePrice()
        this.btnCheckout.click()
    }

    storePrice(){
        this.lblPrice.then($ele => {
            cy.wrap($ele.text()).as('cartprice')
        })
    }

}
export default new CartPage()