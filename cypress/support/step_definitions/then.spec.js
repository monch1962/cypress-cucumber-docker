/// <reference types="Cypress" />

import { Then } from 'cypress-cucumber-preprocessor/steps'
import checkTitle from './check/checkTitle'
import checkTitleContains from './check/checkTitleContains'
import checkIfElementExists from './lib/checkIfElementExists'
import isVisible from './check/isVisible'

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
