# Cypress-Cucumber-Docker

## Docker container to run Cucumber tests against Cypress

Note that there is a pre-defined set of Cucumber step files under `./cypress/support/step_definitions`. These are intended to speed up the creation of Cucumber/Gherkin files and reduce the expertise required to do so

A screenshot is taken at the end of each test execution, and a MP4 video is captured of each feature file while it executes.

Results are captured in JUnit format, and written both to file and to the console

## Instructions
To build
`$ docker build . -t ccd`

To run using built-in feature file, with results being written to `./results` directory
`$ docker run -v "$(pwd)/results:/results" ccd:latest`

To run supplying your own feature file/s, assuming they're in `./cypress/integration`
`$ docker run -v "$(pwd)/results:/results" -v "$(pwd)/cypress/integration:/cypress/integration" ccd:latest`










