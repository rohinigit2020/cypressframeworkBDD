Feature: Shopping cart demo
    @e2e
    Scenario Outline: End to end journey
        Given When i am in Sauce demo site
        When I logged in with "<uname>" and password "<pswd>"
        Then I should be landed in product page
        When when I add fleece jacket to the cart
        And I checkout the product
        Then the cart price should be equal to product price
        When I submit personal information
        And I confirmed the product
        Then The the order should be confirmed
        When I logout from product confirm page
        Then I should see the login page

Examples:
    | uname | pswd | 
    | standard_user | secret_sauce  |
      