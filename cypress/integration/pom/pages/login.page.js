class LoginPage {

    get txtUsername() { return cy.get('#user-name') }
    get txtPassword() { return cy.get('#password') }
    
    get btnLogin() {return cy.get('#login-button')}

    openUrl(){
        cy.visit('/index.html')
    }

    getTitle() {
        return cy.title()
    }

    login(user, pass){
        this.txtUsername.type(user)
        this.txtPassword.type(pass)
        this.btnLogin.click()
    }
}
export default new LoginPage()