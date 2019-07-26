import {
    Given
} from 'cypress-cucumber-preprocessor/steps'
import blah from './blah'
import vivaLogin from './vivaLogin.js'

Given(
    /^blah$/,
    blah
)

Given(
    /^I login with user "([^"]*)?" and password "([^"]*)?"$/,
    vivaLogin
)