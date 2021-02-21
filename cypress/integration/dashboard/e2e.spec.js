describe('Basic shopping demo', () => {
    it('E2E Journey', () => {
        cy.visit('https://www.saucedemo.com/index.html')
        //Login
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        //Select  product
        cy.contains('Sauce Labs Fleece Jacket').click()

        cy.get("div[class='inventory_details_price']").then($ele => {
            cy.wrap($ele.text()).as('price')
        })

        cy.get("button[class='btn_primary btn_inventory']").click()
        cy.contains('REMOVE').should('be.visible')
        cy.get("a[class='shopping_cart_link fa-layers fa-fw']").click()

        //Check out
        cy.get("div[class='inventory_item_price']").then(ele => {
            cy.get('@price').then(price => {
                expect(price).to.contain(ele.text())
            })
        })
        cy.get("a[class='btn_action checkout_button']").click()
        

        //Information
        cy.get('#first-name').type('Sridhar')
        cy.get('#last-name').type('Bandi')
        cy.get('#postal-code').type('00000')
        cy.get("input[type='submit']").click()

        //Review
        cy.get("a[class='btn_action cart_button']").click()

        //Confirmation
        cy.get("h2[class='complete-header']").should('contain', 'THANK YOU FOR YOUR ORDER')
        //cypress run --record --key d95959e3-1082-4178-b456-adb9ae8d53ff
    })
})