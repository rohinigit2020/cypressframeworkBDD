import HeaderComponent from '../components/header.comp'
import MenuComponent from '../components/menu.comp'

class ConfirmationPage {

    get lblConfirmTitle() { return cy.get("h2[class='complete-header']") }

    logOut(){
        HeaderComponent.clickMenu()
        MenuComponent.logOut()
    }

}
export default new ConfirmationPage()