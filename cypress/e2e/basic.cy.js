describe('sample test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the resources text', () => {
    cy.get('h1')
    .contains('Welcome to my app!');
  })
  it('renders the form', () => {
    cy.get('form')
    .should('be.visible')
  })
})
