describe('test', function() {
  it('add man', function() {
    cy.visit('http://0.0.0.0:9000')
    cy.get('#add-input').clear().type('Andrew')
    cy.get('#dispersia-input').clear().type('123')
    cy.get('#select-gender').select("Мужской")
    cy.get('#add').click()
    cy.get('#add-input').clear()
    cy.get('#dispersia-input').clear()
    cy.get('#my_table').find('input').eq(5).should('have.value', 'Andrew')
    cy.get('#my_table').find('input').eq(6).should('have.value', 'Мужской')
  })
  it('add woman', function() {
    cy.visit('http://0.0.0.0:9000')
    cy.get('#add-input').clear().type('Elizaveta')
    cy.get('#dispersia-input').clear().type('15')
    cy.get('#select-gender').select("Женский")
    cy.get('#add').click()
    cy.get('#add-input').clear()
    cy.get('#dispersia-input').clear()
    cy.get('#my_table').find('input').eq(5).should('have.value', 'Elizaveta')
    cy.get('#my_table').find('input').eq(6).should('have.value', 'Женский')
  })
  it('delete person', function() {
    cy.visit('http://0.0.0.0:9000')
    cy.get('#add-input').clear().type('Elizaveta')
    cy.get('#dispersia-input').clear().type('15')
    cy.get('#select-gender').select("Женский")
    cy.get('#add').click()
    cy.get('#delete-input').type('Elizaveta')
    cy.get('#delete').click()
    cy.get('#my_table').find('input').should('have.length', '5')
  })
  it('computation', function() {
    cy.visit('http://0.0.0.0:9000')
    cy.get('#add-input').clear().type(' ')
    cy.get('#dispersia-input').clear().type(15)
    cy.get('#add').click()
    cy.get('#my_table').find('input').eq(8).should('have.value', '0.06807')
    cy.get('#my_table').find('input').eq(9).should('have.value', '10.88051')
  })
  it('color-text', function() {
    cy.visit('http://0.0.0.0:9000')
    cy.get("#color-text").type('red')
    cy.get('#my_table').find('input').eq(1).should('have.css', 'border-color', 'rgb(255, 0, 0)')
    cy.get("#color-text").clear()
    cy.get('#my_table').find('input').eq(1).should('have.css', 'border-color', 'rgb(0, 0, 0)')
  })
})
