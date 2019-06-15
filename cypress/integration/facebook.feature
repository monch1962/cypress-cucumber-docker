Feature: Facebook

  Background: Bring up the Facebook landing page
    Given I open the site "www.facebook.com"
  
  Scenario: Check that the .mbs element is visible
    Given the element ".mbs" is visible

  Scenario: Check the page title is correct
    Then I expect that the title is "Facebook - log in or sign up"

  Scenario: Check the page title contains Facebook
    Then I expect that the title contains "Facebook"
  
  Scenario: Check the page title doesn't contains Facebook1
    Then I expect that the title not contains "Facebook1"
  