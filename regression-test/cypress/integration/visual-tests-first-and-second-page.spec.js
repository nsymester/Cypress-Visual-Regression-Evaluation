/* global cy describe it */

const pages = ["about", "skills"]
describe("Visual regression tests", () => {
	pages.forEach((page) => {
		it(`Should match previous screenshot '${page} Page'`, () => {
			cy.visit(`/#${page}`)
			cy.matchImageSnapshot()
		})
	})
})
