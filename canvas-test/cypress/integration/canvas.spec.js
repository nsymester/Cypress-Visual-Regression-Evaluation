/* global describe it cy */

describe("Some app", () => {
	it("should see a yellow canvas", () => {
		cy.visit("http://localhost:5000")

		// Take a snapshot
		cy.wrap("canvas").toMatchSnapshot()
	})
})
