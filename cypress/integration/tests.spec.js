describe('Revolucion Indutrial Homepage', function () {
  it('Login Page', function () {
    cy.visit('localhost:3000')
    cy.contains('Ingresar').click()
    cy.get('input[name="user"]').type('fakeUser').should('have.value', 'fakeUser')
    cy.contains('Ingresar').click()
    cy.get('input[name="newgame"]').type('Partida 1').should('have.value', 'Partida 1')
    cy.contains('Juego nuevo').click()
    cy.url().should('include', '/game/fakeUser')
  })
})

describe('Revolucion Indutrial Juego', function () {
  it('Game', function () {
    cy.visit('localhost:3000/game/fakeUser/Juego%20nuevo')
    cy.get('.starter').click()
    cy.get('.factory').click(10, 10)
    cy.get('.transporter').click()
    cy.get('.factory').click(10, 100)
    cy.get('.seller').click()
    cy.get('.factory').click(10, 180)
    cy.contains('Revolución Industrial')
    cy.contains('Dinero')
  })
})