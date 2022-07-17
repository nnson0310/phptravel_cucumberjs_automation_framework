Feature: User can login to user dashboard
    Scenario Outline:
        Given visit url "https://www.phptravels.net/login"
        When enter email = <email>
        And enter password = <password>
        Then error message "Wrong credentials. try again!" is displayed
        Examples:
            | email           | password |
            | admin@gmail.net | 123456   |
            | admin@gmail     | 123456   |