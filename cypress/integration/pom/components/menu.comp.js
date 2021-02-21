class MenuComponent{

    get lnkLogout() { return cy.get("#logout_sidebar_link")}

    logOut(){
        this.lnkLogout.click()
    }

}
export default new MenuComponent()