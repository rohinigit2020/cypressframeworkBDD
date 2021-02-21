
describe('Managing Environt Variable', ()=> {
    it('Access env Variables', ()=> {
        cy.log(Cypress.env("host"))
        cy.log(Cypress.env("port"))
        cy.log(Cypress.env("portff"))
        //cy.request(Cypress.env("host")+"/api/user")
    })
})