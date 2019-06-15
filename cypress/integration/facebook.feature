Feature: Facebook
  
  Scenario: Opening a social network page
    Given I open the site "www.facebook.com"
    And the element ".mbs" is visible
    Then I expect that the title is "Facebook - log in or sign up"