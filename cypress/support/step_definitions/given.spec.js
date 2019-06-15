/// <reference types="Cypress" />

import { Given } from 'cypress-cucumber-preprocessor/steps'
import openWebsite from './actions/openWebsite'
import isVisible from './check/isVisible'
import checkTitle from './check/checkTitle'
import pending from './lib/pending'

Given(
  /^I open the (url|site) "([^"]*)?"$/,
  openWebsite
)

Given(
  /^the element "([^"]*)?" is( not)* visible$/,
  isVisible
)

Given(
    /^the element "([^"]*)?" is( not)* enabled$/,
    // isEnabled
    pending
)

Given(
    /^the element "([^"]*)?" is( not)* selected$/,
    // checkSelected
    pending
)

Given(
    /^the checkbox "([^"]*)?" is( not)* checked$/,
    // checkSelected
    pending
)

Given(
    /^there is (an|no) element "([^"]*)?" on the page$/,
    // checkElementExists
    pending
)

Given(
    /^the title is( not)* "([^"]*)?"$/,
    checkTitle
)

Given(
    /^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/,
    // compareText
    pending
)

Given(
    /^the (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
    // checkEqualsText
    pending
)

Given(
    /^the (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    // checkContainsText
    pending
)

Given(
    /^the (button|element) "([^"]*)?"( not)* contains any text$/,
    // checkContainsAnyText
    pending
)

Given(
    /^the (button|element) "([^"]*)?" is( not)* empty$/,
    // checkIsEmpty
    pending
)

Given(
    /^the page url is( not)* "([^"]*)?"$/,
    // checkUrl
    pending
)

Given(
    /^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    // checkProperty
    pending
)

Given(
    /^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/,
    // checkCookieContent
    pending
)

Given(
    /^the cookie "([^"]*)?" does( not)* exist$/,
    // checkCookieExists
    pending
)

Given(
    /^the element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
    // checkDimension
    pending
)

Given(
    /^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
    // checkOffset
    pending
);

Given(
    /^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
    // resizeScreenSize
    pending
)

Given(
    /^I have closed all but the first (window|tab)$/,
    // closeAllButFirstTab
    pending
)

Given(
    /^a (alertbox|confirmbox|prompt) is( not)* opened$/,
    // checkModal
    pending
)
