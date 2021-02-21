import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../pom/pages/login.page'
import ProductsPage from '../pom/pages/products.page'
import ConfirmationPage from '../pom/pages/confirmation.page'



Given("When i am in Sauce demo site",()=>{
    LoginPage.openUrl()
})
When("I logged in with {string} and password {string}",(username,password)=>{
    LoginPage.login(username, password)
})
Then("I should be landed in product page",()=>{
    ProductsPage.getUrl().should("contain","/inventory.html")
})
When("I logout",()=>{
    ConfirmationPage.logOut()
})
Then("I should see the login page",()=>{
    LoginPage.txtUsername.should('be.visible')
    
})
