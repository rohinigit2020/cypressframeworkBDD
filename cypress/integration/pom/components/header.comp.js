class HeaderComponent{

    get iconCart() {return  cy.get("a[class='shopping_cart_link fa-layers fa-fw']")} 
    get iconMenu() {return cy.get("div[class='bm-burger-button'] button")}

    selectCart(){
        this.iconCart.click()
    }

    clickMenu(){
        this.iconMenu.click()
    }

}
export default new HeaderComponent()