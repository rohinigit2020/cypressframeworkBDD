class ReviewPage {

    get btnFinish() { return cy.get("a[class='btn_action cart_button']")}

    clickFinish(){
        this.btnFinish.click()
    }

}
export default new ReviewPage()