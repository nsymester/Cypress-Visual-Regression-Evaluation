/* global cy describe it */

const pages = ["about", "skills"]
describe("Multiple pages visual regression tests", () => {
	pages.forEach((page) => {
		it(`Should match previous screenshot '${page} Page'`, () => {
			cy.visit(`/#${page}`)
			cy.matchImageSnapshot()
		})
	})
})
