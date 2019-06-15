import { Given } from 'cypress-cucumber-preprocessor/steps'
import openWebsite from './actions/openWebsite'

Given(
  /^I open the (url|site) "([^"]*)?"$/,
  openWebsite
)
