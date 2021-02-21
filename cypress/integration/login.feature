Feature: Login demo

    Scenario: Login journey
        Given When i am in Sauce demo site
        When I logged in with "standard_user" and password "secret_sauce"
        Then I should be landed in product page
        When I logout
        Then I should see the login page
       