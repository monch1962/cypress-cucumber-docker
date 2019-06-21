FROM cypress/base:10

ENV BROWSER_API "cypress"
COPY package.json package.json
RUN npm install

COPY ./cypress.json ./cypress.json
COPY ./cypress/plugins/index.js ./cypress/plugins/index.js
COPY ./cypress/integration ./cypress/integration
COPY ./cypress/support ./cypress/support

RUN npm run cypress-verify
CMD npm run cypress-run
