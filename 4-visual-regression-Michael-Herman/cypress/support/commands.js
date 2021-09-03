// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const compareSnapshotCommand = require("cypress-visual-regression/dist/command")

function compareSnapshotTestCommand() {
	Cypress.Commands.add(
		"compareSnapshotTest",
		{ prevSubject: "optional" },
		(subject, name, params = 0.0) => {
			let screenshotOptions = {}
			let errorThreshold = 0.0
			if (typeof params === "number") {
				errorThreshold = params
			} else if (typeof params === "object") {
				errorThreshold = params.errorThreshold || 0.0
				// eslint-disable-next-line prefer-object-spread
				screenshotOptions = Object.assign({}, params)
			}
			// get image title from the 'type' environment variable
			let title = "actual"
			if (Cypress.env("type") === "base") {
				title = "base"
			}

			// take snapshot
			if (subject) {
				cy.get(subject).screenshot(
					`${name}-${title}`,
					screenshotOptions
				)
			} else {
				cy.screenshot(`${name}-${title}`, screenshotOptions)
			}

			// run visual tests
			if (Cypress.env("type") === "actual") {
				const options = {
					fileName: name,
					specDirectory: Cypress.spec.name,
					failSilently:
						Cypress.env("failSilently") !== undefined
							? Cypress.env("failSilently")
							: true,
				}
				cy.task("compareSnapshotsPlugin", options).then((results) => {
					if (results.error) {
						console.log(results.error) // eslint-disable-line no-console
						return false
					}

					if (results.percentage > errorThreshold) {
						return false
					}

					return true
				})
			}
		}
	)
}

compareSnapshotTestCommand()
compareSnapshotCommand()
