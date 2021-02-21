class ProductsPage{

    get fleeceJacket() {return cy.contains('Sauce Labs Fleece Jacket')}
    
    getUrl(){return cy.url() }

    selectFleeceJacket(){
        this.fleeceJacket.click()
    }
}

export default new ProductsPage()