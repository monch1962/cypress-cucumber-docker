import { Then } from 'cypress-cucumber-preprocessor/steps'
import checkTitle from './check/checkTitle'

Then(
  /^I expect that the title is( not)* "([^"]*)?"$/,
  checkTitle
)
