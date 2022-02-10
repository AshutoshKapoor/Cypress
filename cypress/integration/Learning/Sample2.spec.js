/// <reference types="../cypress" />

describe("I dont know what i am doing", () => {
    it('time travel',() => {
        //cy.viewport('iphone-x')//with viewport() we can test the website according to screen size
        cy.visit('https://www.instagram.com/')
        cy.wait(1000)
        cy.contains('Forgot password?').click()
        cy.wait(1000)
        cy.go('back')
        //cy.url()//gives current url
      })
})