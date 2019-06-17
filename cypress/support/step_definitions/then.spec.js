/// <reference types="Cypress" />

import { Then } from 'cypress-cucumber-preprocessor/steps'
import checkTitle from './check/checkTitle'
import checkTitleContains from './check/checkTitleContains'
import checkIfElementExists from './lib/checkIfElementExists'
import isVisible from './check/isVisible'
import isEnabled from './check/isEnabled'
import checkSelected from './check/checkSelected'
import compareText from './check/compareText'
import pending from './lib/pending'
import isExisting from './check/isExisting'
import checkUrl from './check/checkUrl'
import checkEqualsText from './check/checkEqualsText'

Then(
  /^I expect that the title is( not)* "([^"]*)?"$/,
  checkTitle
)

Then(
  /^I expect that the title( not)* contains "([^"]*)?"$/,
  checkTitleContains
)

Then(
  /^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/,
  checkIfElementExists
)

Then(
  /^I expect that element "([^"]*)?" is( not)* visible$/,
  isVisible
)

Then(
  /^I expect that element "([^"]*)?" becomes( not)* visible$/,
  // waitForVisible
  pending
)

Then(
  /^I expect that element "([^"]*)?" is( not)* within the viewport$/,
  // checkWithinViewport
  pending
)

Then(
  /^I expect that element "([^"]*)?" does( not)* exist$/,
  isExisting
)

Then(
  /^I expect that element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/,
  compareText
)

Then(
  /^I expect that (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
  checkEqualsText
)

Then(
  /^I expect that (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
  // checkContainsText
  pending
)

Then(
  /^I expect that (button|element) "([^"]*)?"( not)* contains any text$/,
  // checkContainsAnyText
  pending
)

Then(
  /^I expect that (button|element) "([^"]*)?" is( not)* empty$/,
  // checkIsEmpty
  pending
)

Then(
  /^I expect that the url is( not)* "([^"]*)?"$/,
  checkUrl
)

Then(
  /^I expect that the path is( not)* "([^"]*)?"$/,
  // checkURLPath
  pending
)

Then(
  /^I expect the url to( not)* contain "([^"]*)?"$/,
  // checkInURLPath
  pending
)

Then(
  /^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
  // checkProperty
  pending
)

Then(
  /^I expect that the font( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
  // checkFontProperty
  pending
)

Then(
  /^I expect that checkbox "([^"]*)?" is( not)* checked$/,
  checkSelected
)

Then(
  /^I expect that element "([^"]*)?" is( not)* selected$/,
  checkSelected
)

Then(
  /^I expect that element "([^"]*)?" is( not)* enabled$/,
  isEnabled
)

Then(
  /^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/,
  // checkCookieContent
  pending
)

Then(
  /^I expect that cookie "([^"]*)?"( not)* exists$/,
  // checkCookieExists
  pending
)

Then(
  /^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
  // checkDimension
  pending
)

Then(
  /^I expect that element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
  // checkOffset
  pending
)

Then(
  /^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/,
  // checkClass
  pending
)

Then(
  /^I expect a new (window|tab) has( not)* been opened$/,
  // checkNewWindow
  pending
)

Then(
  /^I expect the url "([^"]*)?" is opened in a new (tab|window)$/,
  // checkIsOpenedInNewWindow
  pending
)

Then(
  /^I expect that element "([^"]*)?" is( not)* focused$/,
  // checkFocus
  pending
)

Then(
  /^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/,
  // {
  //     wrapperOptions: {
  //         retry: 3,
  //     },
  // },
  // waitFor
  pending
)

Then(
  /^I expect that a (alertbox|confirmbox|prompt) is( not)* opened$/,
  // checkModal
  pending
)

Then(
  /^I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "([^"]*)?"$/,
  // checkModalText
  pending
)
