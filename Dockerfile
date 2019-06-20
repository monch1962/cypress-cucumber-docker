FROM cypress/base:10

ENV CYPRESS 1
COPY package.json package.json
RUN npm install
# RUN npm install --save-dev cypress cypress-cucumber-preprocessor cypress-image-snapshot cypress-junit-reporter

# COPY ./config ./config
# COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./cypress/plugins/index.js ./cypress/plugins/index.js
COPY ./cypress/integration ./cypress/integration
COPY ./cypress/support ./cypress/support

# RUN ["npm", "run", "record:ecs"]
#RUN $(npm bin)/cypress verify
RUN npm run cypress-verify
#CMD $(npm bin)/cypress run
CMD npm run cypress-run
