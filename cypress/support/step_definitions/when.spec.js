/// <reference types="Cypress" />

import { When } from 'cypress-cucumber-preprocessor/steps'
import pending from './lib/pending'
import clickElement from './actions/clickElement'
import setInputField from './actions/setInputField'

When(
    /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
    clickElement
)

When(
    /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
    setInputField
)

When(
    /^I clear the inputfield "([^"]*)?"$/,
    // clearInputField
    pending
)

When(
    /^I drag element "([^"]*)?" to element "([^"]*)?"$/,
    // dragElement
    pending
)

When(
    /^I submit the form "([^"]*)?"$/,
    // submitForm
    pending
)

When(
    /^I pause for (\d+)ms$/,
    // pause
    pending
)

When(
    /^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/,
    // setCookie
    pending
)

When(
    /^I delete the cookie "([^"]*)?"$/,
    // deleteCookie
    pending
)

When(
    /^I press "([^"]*)?"$/,
    // pressButton
    pending
)

When(
    /^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/,
    // handleModal
    pending
)

When(
    /^I enter "([^"]*)?" into the prompt$/,
    // setPromptText
    pending
)

When(
    /^I scroll to element "([^"]*)?"$/,
    // scroll
    pending
)

When(
    /^I close the last opened (window|tab)$/,
    // closeLastOpenedWindow
    pending
)

When(
    /^I focus the last opened (window|tab)$/,
    // focusLastOpenedWindow
    pending
)

When(
    /^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/,
    // selectOptionByIndex
    pending
)

When(
    /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
    // selectOption
    pending
)

When(
    /^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/,
    // moveToElement
    pending
)