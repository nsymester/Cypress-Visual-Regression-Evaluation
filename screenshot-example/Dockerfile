
FROM cypress/included:4.11.0

WORKDIR /e2e

COPY ./package.json ./package.json
RUN npm i

COPY ./cypress.json ./cypress.json
COPY ./cypress ./cypress

RUN npm run test
