# Adding screenshot testing with Cypress in your project

From: Marie Drake
Date: May 4, 2020

Link: <https://www.mariedrake.com/post/using-docker-to-run-your-cypress-tests>

## Cypress Docker images included

Run the following to build and run the tests in the container.
`docker build -t cypress-test-image:1.0.0 .`

Run the following to re-run the tests.
`docker run -t cypress-test-image:1.0.0 .`

Note: This is only for the standard cypress tests with _no plugins_

## Cypress Docker images, base or browsers

Run the following to build and run the tests in the container.
`docker build -t cypress-test-image:1.0.0 -f Dockerfile-base.dockerfile .`

Run the following to re-run the tests.
`docker run -t cypress-test-image:1.0.0 .`

Note: This will include all your plugins

## Cypress Docker images, base or browsers and you want to run Cypress headlessly

You can change the docker images in `Docker-base-headless.dockerfile` for different browsers found in `https://github.com/cypress-io/cypress-docker-images/tree/master/browsers`
Run the following to build and run the tests in the container
`docker build -t cypress-test-image:1.0.0 -f Dockerfile-base-headless.dockerfile .`
