describe('SongSubmit Form Test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[data-test="title"]').type('Teenagers')
    cy.get('[data-test="artist"]').type('My Chemical Romance')
    cy.get('[data-test="album"]').type('The Black Parade')
    cy.get('[data-test="genre"]').type('Punk Rock')
    cy.get('[data-test="release_date"]').type('2006-10-20')
    cy.get('[data-testid="submit btn"]').click()

  })
})

describe('SearchBar')