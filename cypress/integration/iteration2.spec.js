describe('Iteration 2 - Making a card', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')

    cy.get('select')
    .select('🌻')

    cy.get('#recipient')
    .type('Hannah')

    cy.get('#sender')
    .type('Kayla')

    cy.get('#message')
    .type('Happy birthday!')
  })

  it('should display what the user has typed', () => {
    cy.get('#emoji')
    .should('have.value', '🌻')

    cy.get('#recipient')
    .should('have.value', 'Hannah')

    cy.get('#sender')
    .should('have.value', 'Kayla')

    cy.get('#message')
    .should('have.value', 'Happy birthday!')
  })

  it('should make a card when the button is clicked', () => {
    cy.get('#make-card-btn')
    .click()

    cy.get('div .Card')
    .should('have.length', 1)

    cy.get('.Card .emoji-text')
    .contains('🌻')

    cy.get('.Card .recipient-text')
    .contains('To: Hannah')

    cy.get('.Card .sender-text')
    .contains('From: Kayla')

    cy.get('.Card .message-text')
    .contains('Happy birthday!')
  })

  it('should clear fields when card is created', () => {
    cy.get('#make-card-btn')
    .click()

    cy.get('#emoji')
    .should('have.value', '✨')

    cy.get('#recipient')
    .should('have.value', '')

    cy.get('#sender')
    .should('have.value', '')

    cy.get('#message')
    .should('have.value', '')
  })
})
