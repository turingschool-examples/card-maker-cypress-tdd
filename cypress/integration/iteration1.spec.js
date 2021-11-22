describe('Iteration 1 - Basic App Components', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it.skip('should have an App component', () => {
    cy.get('main')
      .should('have.class', 'App')
  })

  it.skip('should have a title', () => {
    cy.get('h1')
      .contains('Card Creator')
  })

  it.skip('should have a Form component', () => {
    cy.get('form')
      .should('exist')
      .should('have.class', 'Form')
  })

  it.skip('should have correct elements in form', () => {
    cy.get('.Form select')
      .should('have.id', 'emoji')

    cy.get('.Form input')
      .should('have.length', 2)

    cy.get('.Form input').first()
      .should('have.id', 'recipient')

    cy.get('.Form input').eq(1)
      .should('have.id', 'sender')

    cy.get('.Form textarea')
      .should('have.id', 'message')

    cy.get('.Form button')
      .should('have.id', 'make-card-btn')
  })

  it.skip('should have correct labels for form elements', () => {
    cy.get('label')
      .should('have.length', 4)

    cy.get('label').eq(0)
      .should('contain', 'Emoji:')

    cy.get('label').eq(1)
      .should('contain', 'Recipient:')

    cy.get('label').eq(2)
      .should('contain', 'Sender:')

    cy.get('label').eq(3)
      .should('contain', 'Message:')
  })

  it.skip('should have the correct options for select element', () => {
    cy.get('select option')
      .should('have.length', 4)

    cy.get('select option').eq(0)
      .should('contain', '✨')
      .should('have.value', '✨')

    cy.get('select option').eq(1)
      .should('contain', '❤️')
      .should('have.value', '❤️')

    cy.get('select option').eq(2)
      .should('contain', '🎉')
      .should('have.value', '🎉')

    cy.get('select option').eq(3)
      .should('contain', '🌻')
      .should('have.value', '🌻')
  })

  it.skip('should have a CardContainer component', () => {
    cy.get('section')
      .should('have.class', 'CardContainer')
  })

  it.skip('should start with no Cards', () => {
    cy.get('div .Card')
      .should('not.exist')
  })
})
