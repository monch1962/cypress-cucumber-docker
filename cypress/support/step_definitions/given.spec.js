import {
  Given
} from 'cypress-cucumber-preprocessor/steps'
import openWebsite from './actions/openWebsite'
import isVisible from './check/isVisible'
import isEnabled from './check/isEnabled'
import checkSelected from './check/checkSelected'
import checkElementExists from './check/checkElementExists'
import checkTitle from './check/checkTitle'
import checkEqualsText from './check/checkEqualsText'
import clickElement from './actions/clickElement'
import checkUrl from './check/checkUrl'
import compareText from './check/compareText'
import pending from './lib/pending'

Given(
  /^I open the (url|site) "([^"]*)?"$/,
  // /^the url ("([^"]*)?"|'([^']*)?') is opened$/,
  openWebsite
)

Given(
  /^the (url|site) ("([^"]*)?"|'([^']*)?') is opened$/,
  openWebsite
)

Given(
  /^I (click|doubleclick) on the (link|button|element) ("([^"]*)?"|'([^']*)?')$/,
  clickElement
)

Given(
  /^the element ("([^"]*)?"|'([^']*)?') is( not)* visible$/,
  isVisible
)

Given(
  /^the element ("([^"]*)?"|'([^']*)?') is( not)* enabled$/,
  isEnabled
)

Given(
  /^the element ("([^"]*)?"|'([^']*)?') is( not)* selected$/,
  checkSelected
)

Given(
  /^the checkbox ("([^"]*)?"|'([^']*)?') is( not)* checked$/,
  checkSelected
)

Given(
  /^there is (an|no) element ("([^"]*)?"|'([^']*)?') on the page$/,
  checkElementExists
)

Given(
  /^the title is( not)* ("([^"]*)?"|'([^']*)?')$/,
  checkTitle
)

Given(
  /^the element ("([^"]*)?"|'([^']*)?') contains( not)* the same text as element ("([^"]*)?"|'([^']*)?')$/,
  compareText
)

Given(
  /^the (button|element) ("([^"]*)?"|'([^']*)?')( not)* matches the text ("([^"]*)?"|'([^']*)?')$/,
  checkEqualsText
)

Given(
  /^the (button|element) ("([^"]*)?"|'([^']*)?')( not)* contains the text ("([^"]*)?"|'([^']*)?')$/,
  // checkContainsText
  pending
)

Given(
  /^the (button|element) ("([^"]*)?"|'([^']*)?')( not)* contains any text$/,
  // checkContainsAnyText
  pending
)

Given(
  /^the (button|element) ("([^"]*)?"|'([^']*)?') is( not)* empty$/,
  // checkIsEmpty
  pending
)

Given(
  /^the page url is( not)* ("([^"]*)?"|'([^']*)?')$/,
  checkUrl
)

Given(
  /^the( css)* attribute ("([^"]*)?"|'([^']*)?') from element ("([^"]*)?"|'([^']*)?') is( not)* ("([^"]*)?"|'([^']*)?')$/,
  // checkProperty
  pending
)

Given(
  /^the cookie ("([^"]*)?"|'([^']*)?') contains( not)* the value ("([^"]*)?"|'([^']*)?')$/,
  // checkCookieContent
  pending
)

Given(
  /^the cookie ("([^"]*)?"|'([^']*)?') does( not)* exist$/,
  // checkCookieExists
  pending
)

Given(
  /^the element ("([^"]*)?"|'([^']*)?') is( not)* ([\d]+)px (broad|tall)$/,
  // checkDimension
  pending
)

Given(
  /^the element ("([^"]*)?"|'([^']*)?') is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
  // checkOffset
  pending
)

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