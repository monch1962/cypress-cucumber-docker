Feature: test-webserver

    Background: Bring up the home page
        Given I open the site "http://localhost:8080/"

    Scenario: Check the title is correct
        Then I expect that the title is 'DEMO APP'
        And I expect that the title contains 'MO AP'

    Scenario: Check that we can see a visibile element
        Then I expect that element '#visible' is visible

    Scenario: Check that we can't see an invisible element
        Then I expect that element '#hidden' is not visible

    Scenario: Check that an existing element exists
        Then I expect that element '#existing' does exist

    Scenario: Testing custom step implementation
        Given blah