/// <reference types="Cypress" />

import { Given } from 'cypress-cucumber-preprocessor/steps'
import openWebsite from './actions/openWebsite'
import isVisible from './check/isVisible'

Given(
  /^I open the (url|site) "([^"]*)?"$/,
  openWebsite
)

Given(
  /^the element "([^"]*)?" is( not)* visible$/,
  isVisible
)
