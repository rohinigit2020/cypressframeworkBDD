class PersonalInfoPage{

    get txtFirstName() {return cy.get('#first-name')}
    get txtLastName() {return cy.get('#last-name')}
    get txtPostCode() {return cy.get('#postal-code')}

    get btnContinue() {return cy.get("input[type='submit']")}

  
    submitPersonalInfo(){
        this.txtFirstName.type('Sridhar')
        this.txtLastName.type('Bandi')
        this.txtPostCode.type('000000')
        this.btnContinue.click()
    }
    
}
export default new PersonalInfoPage()