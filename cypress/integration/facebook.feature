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
  
  #Scenario: Check the page has 1 button
  #  Then I expect that element "#u_0_15" does appear exactly 1 times

  Scenario: Check the submit button is visible
    Then I expect that element "#u_0_15" is visible

  Scenario: Check the submit button is enabled
    Given the element "#u_0_15" is enabled
    Then I expect that element "#u_0_15" is enabled

  Scenario: Check the 'Auto Remove Recent Logins with FBP' is not selected
    Given the element "#rmrecentlogins" is not selected
    Then I expect that element "#rmrecentlogins" is not selected

  Scenario: Check the 'Auto Remove Recent Logins with FBP' is not checked
    Given the checkbox "#rmrecentlogins" is not checked
    Then I expect that checkbox "#rmrecentlogins" is not checked

  Scenario: The Facebook logo should exist
    Given there is an element ".fb_logo" on the page
  
  Scenario: Check the existence of some page elements
    Then I expect that element ".fb_logo" does exist
    And I expect that element "#xyzzy" does not exist

  Scenario: Check text content of a page element
    Given the element ".fwn" matches the text "It's free and always will be."
    Then I expect that element ".fwn" matches the text "It's free and always will be."

  #Scenario: pending step - still to be developed
  #  Then I expect that a alertbox is not opened