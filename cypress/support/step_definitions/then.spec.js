/// <reference types="Cypress" />

import { Then } from 'cypress-cucumber-preprocessor/steps'
import checkTitle from './check/checkTitle'
import checkTitleContains from './check/checkTitleContains'

Then(
  /^I expect that the title is( not)* "([^"]*)?"$/,
  checkTitle
)

Then(
  /^I expect that the title( not)* contains "([^"]*)?"$/,
  checkTitleContains
)
