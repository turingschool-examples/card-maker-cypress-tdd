describe('Iteration 4 - Deleting a Card', () => {
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

    cy.get('#make-card-btn')
      .click()

    cy.get('select')
    .select('✨')

    cy.get('#recipient')
    .type('Leta')

    cy.get('#sender')
    .type('Scott')

    cy.get('#message')
    .type('Thanks for being a good friend!')

    cy.get('#make-card-btn')
      .click()

    cy.get('select')
    .select('❤️')

    cy.get('#recipient')
    .type('Heather')

    cy.get('#sender')
    .type('Cass')

    cy.get('#message')
    .type('We miss you!')

    cy.get('#make-card-btn')
      .click()
  })

  it.skip('should start with 3 cards', () => {
    cy.get('.Card')
      .should('have.length', 3)

    cy.get('.Card').eq(0)
      .get('button')
      .contains('X')
      .should('have.id', 'delete-card-btn')
  })

  it.skip('should have 2 cards after one is deleted', () => {
    cy.get('.Card #delete-card-btn').eq(1)
      .click()

    cy.get('.Card')
      .should('have.length', 2)

    cy.get('.Card .message-text').eq(0)
      .should('contain', 'Happy birthday!')

    cy.get('.Card .message-text').eq(1)
      .should('contain', 'We miss you!')
  })
})
