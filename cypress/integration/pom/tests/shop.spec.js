import LoginPage from '../pages/login.page'
import ProductsPage from '../pages/products.page'
import ProductPage from '../pages/product.page'
import CartPage from '../pages/cart.page'
import PersonalInfoPage from '../pages/personalinfo.page'
import ReviewPage from '../pages/review.page'
import ConfirmationPage from '../pages/confirmation.page'

describe('Shopping Cart', () => {

    let users = [{username: "standard_user", password:"secret_sauce"}, {username: "standard_user", password:"secret_sauce"}]

    users.forEach( user => {
    it(`E2E journey for the user ${user.username}`, () => {

        LoginPage.openUrl()
        LoginPage.login(user.username, user.password)

        ProductsPage.selectFleeceJacket()

        ProductPage.clickAddtoCart()
        ProductPage.btnRemove.should('be.visible')
        ProductPage.chooseCart()

        CartPage.checkOut()
        cy.get('@price').then(productprice => {
            cy.get('@cartprice').then(cartprice => {
                expect(productprice).to.contain(cartprice)
            })
        })

        PersonalInfoPage.submitPersonalInfo()

        ReviewPage.clickFinish()

        ConfirmationPage.lblConfirmTitle.should('contain', 'THANK YOU FOR YOUR ORDER')

        ConfirmationPage.logOut()
    })
})
})