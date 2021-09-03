
FROM cypress/browsers:node10.16.0-chrome77-ff71

WORKDIR /app

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./package.json ./package.json

RUN npm i && npx cypress run --headless --browser chrome
