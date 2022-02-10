/// <reference types="cypress" />
describe('My First Test', () => {
    it('finds the content "type"', () => {
      cy.visit('https://roost.io') // visits URL
      cy.contains('DevOps')//checks for text on the webpage
      cy.get('.body-container-wrapper > div')
      cy.get('div')//we can use this to check for elements
      cy.get('div#hs_cos_wrapper_header')//we can check for particular div with an id
      cy.get('div[id=hs_cos_wrapper_header]')//another way to write above statement
      cy.get('div[class="row-fluid"]')
      cy.contains('CTO, Enterprise Security Company').should('have.text','CTO, Enterprise Security Company')
      cy.get('div[class="row-fluid"]').should('exist')
    })
    /*it('time travel',() => {
      cy.visit('http://localhost:3000/')
      cy.get('[data-ll=but]').click()
    })*/
    it('time travel',() => {
      //cy.viewport('iphone-x')//with viewport() we can test the website according to screen size
      cy.visit('http://instagram.com')
      cy.contains('Forgot password?').click()
    })
  })