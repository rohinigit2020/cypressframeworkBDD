import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

import LoginPage from '../pom/pages/login.page'
import ProductsPage from '../pom/pages/products.page'
import ProductPage from '../pom/pages/product.page'
import CartPage from '../pom/pages/cart.page'
import PersonalInfoPage from '../pom/pages/personalinfo.page'
import ReviewPage from '../pom/pages/review.page'
import ConfirmationPage from '../pom/pages/confirmation.page'


/*
Given("When i am in Sauce demo site",()=>{
    LoginPage.openUrl()
})
When("I logged in with {string} and password {string}",(username,password)=>{
    LoginPage.login(username, password)
})
Then("I should be landed in product page",()=>{
    ProductsPage.getUrl().should("contain","/inventory.html")
    
})*/
When("when I add fleece jacket to the cart",()=>{
    ProductsPage.selectFleeceJacket()
    ProductPage.clickAddtoCart()
    ProductPage.btnRemove.should('be.visible')  
})
And("I checkout the product",()=>{
    ProductPage.chooseCart()
    CartPage.checkOut()
    
})
Then("the cart price should be equal to product price",()=>{
        cy.get('@price').then(productprice => {
            cy.get('@cartprice').then(cartprice => {
                expect(productprice).to.contain(cartprice)
            })
        })
    
})
When("I submit personal information",()=>{
    PersonalInfoPage.submitPersonalInfo()
    
})
And("I confirmed the product",()=>{
    ReviewPage.clickFinish()
    
})
Then("The the order should be confirmed",()=>{
    ConfirmationPage.lblConfirmTitle.should('contain', 'THANK YOU FOR YOUR ORDER')
    
})
When("I logout from product confirm page",()=>{
    ConfirmationPage.logOut()
    
})
/* Then("I should see the login page",()=>{
    LoginPage.txtUsername.should('be.visible')
    
}) */

