describe('test', function () {

  it('test_red_3_lowercase', function () {
    cy.visit('http://server:9000')
    cy.get('#input').clear().type('f00')
    cy.get('#text_red').should('have.text', 'Красный - 255')
    cy.get('#text_green').should('have.text', 'Зеленый - 0')
    cy.get('#text_blue').should('have.text', 'Синий - 0')
  })

  it('test_red_3', function () {
    cy.visit('http://server:9000')
    cy.get('#input').clear().type('F00')
    cy.get('#text_red').should('have.text', 'Красный - 255')
    cy.get('#text_green').should('have.text', 'Зеленый - 0')
    cy.get('#text_blue').should('have.text', 'Синий - 0')
  })

  it('test_red_4', function () {
    cy.visit('http://server:9000')
    cy.get('#input').clear().type('#F00')
    cy.get('#text_red').should('have.text', 'Красный - 255')
    cy.get('#text_green').should('have.text', 'Зеленый - 0')
    cy.get('#text_blue').should('have.text', 'Синий - 0')
  })

  it('test_red_6', function () {
    cy.visit('http://server:9000')
    cy.get('#input').clear().type('FF0000')
    cy.get('#text_red').should('have.text', 'Красный - 255')
    cy.get('#text_green').should('have.text', 'Зеленый - 0')
    cy.get('#text_blue').should('have.text', 'Синий - 0')
  })

  it('test_red_7', function () {
    cy.visit('http://server:9000')
    cy.get('#input').clear().type('#FF0000')
    cy.get('#text_red').should('have.text', 'Красный - 255')
    cy.get('#text_green').should('have.text', 'Зеленый - 0')
    cy.get('#text_blue').should('have.text', 'Синий - 0')
  })

  it('test_white_7', function () {
    cy.visit('http://server:9000')
    cy.get('#input').clear().type('#FFFFFF')
    cy.get('#text_red').should('have.text', 'Красный - 255')
    cy.get('#text_green').should('have.text', 'Зеленый - 255')
    cy.get('#text_blue').should('have.text', 'Синий - 255')
  })
})