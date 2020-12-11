/* global describe, it, cy */

describe('Petgram', function () {
  it('Para ver si la App funciona', function () {
    cy.visit('/')
  })

  it('Funciona la App con categorias', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Funciona la App con navbar', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('be', '/')
  })

  it('Funciona la App con Favs', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', '2')
  })
})
