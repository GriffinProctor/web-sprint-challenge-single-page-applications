describe('PizzaForm', () => {
    it('displays error message for invalid name', () => {
        cy.visit('./pizza')
        cy.get('#order-button').click()
        cy.contains('name must be at least 2 characters').should('exist')

    })
})