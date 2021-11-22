describe('Iteration 3 - Error Handling', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it.skip('should not let you make a card if the recipient is missing', () => {
    cy.get('select')
    .select('🎉')

    cy.get('#sender')
    .type('Robbie')

    cy.get('#message')
    .type('Congratulations!')

    cy.get('#make-card-btn')
      .click()

    cy.get('.Card')
      .should('not.exist')

    cy.get('p')
      .contains('Please fill out all fields.')
  })

  it.skip('should not let you make a card if the sender is missing', () => {
    cy.get('select')
    .select('🎉')

    cy.get('#recipient')
    .type('Travis')

    cy.get('#message')
    .type('Congratulations!')

    cy.get('#make-card-btn')
      .click()

    cy.get('.Card')
      .should('not.exist')

    cy.get('p')
      .contains('Please fill out all fields.')
  })

  it.skip('should not let you make a card if the message is missing', () => {
    cy.get('select')
    .select('🎉')

    cy.get('#recipient')
    .type('Travis')

    cy.get('#sender')
    .type('Robbie')

    cy.get('#make-card-btn')
      .click()

    cy.get('.Card')
      .should('not.exist')

    cy.get('p')
      .contains('Please fill out all fields.')
  })
})
