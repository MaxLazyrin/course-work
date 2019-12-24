describe('test', function () {
  it('london', function () {
    cy.visit('http://server:9000')

    cy.get('#city').clear().type("London")
    cy.get('#country').clear().type("GB")
    cy.get('button').click()
    cy.wait(500)
    cy.get('#location').should('have.text', ' London, GB')
  })
  it('russia', function () {
    cy.visit('http://server:9000')

    cy.get('#city').clear().type("Moscow")
    cy.get('#country').clear().type("RU")
    cy.get('button').click()
    cy.wait(500)
    cy.get('#location').should('have.text', ' Moscow, RU')
  })
  it('error', function () {
    cy.visit('http://server:9000')

    cy.get('button').click()
    cy.wait(500)
    cy.get('#error').should('have.text', 'Please enter the values.')
  })
})