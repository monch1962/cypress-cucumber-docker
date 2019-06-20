import {
    Given
} from 'cypress-cucumber-preprocessor/steps'
import blah from './blah'

Given(
    /^blah$/,
    blah
)