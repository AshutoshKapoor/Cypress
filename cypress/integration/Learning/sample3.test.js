///<reference types='../cypress' />

describe("Testing",() => {
    it("test",() => {
        cy.visit('https://www.instagram.com/')
        cy.get('[data-testid=sign-up-link]').rightclick()
    })
})