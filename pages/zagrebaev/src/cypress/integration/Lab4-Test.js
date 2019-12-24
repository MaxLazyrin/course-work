describe('Zagrebaev Maxim', function() {
    it('Test1', function() {
      cy.visit('http://localhost:8080')
      cy.get('#num').clear().type(8)
      cy.get('#deg').clear().type(3)
      cy.get('#but').click()
        

      cy.get('#res').should('have.value', '512')
    })
    it('Test2', function() {
      cy.visit('http://localhost:8080')
      cy.get('#num').clear().type(8)
      cy.get('#deg').clear().type('b')
      //cy.get('#but').click()
        

      cy.get('#deg').should('have.value', 'NaN')
    })
    it('Test3', function() {
      cy.visit('http://localhost:8080')
      cy.get('#num').clear().type(8)
      cy.get('#deg').clear().type(3333333)
      cy.get('#but').click()
        

      cy.get('#res').should('have.value', 'Infinity')
    })
   
  })