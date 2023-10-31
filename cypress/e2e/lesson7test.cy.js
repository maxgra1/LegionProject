///<reference types = "Cypress"/>
describe('Job Cafe sanity spec',{defaultCommandTimeout:10000}, () => {
    it('test jobs page', () => {
        cy.visit('/');
        cy.get('#3').click()
    })
    it('test cpage',{defaultCommandTimeout:10000}, () => {
        cy.visit('/');
        cy.get('#3').click()
        cy.get('[class="post-item clearfix"]').should('be.visible')
    })
    it('test gobs search for position',{defaultCommandTimeout:10000}, () => {
        cy.visit('/');
        cy.get('#3').click()
        cy.get('[placeholder="position"]').type('QA',{force: true})
        cy.get('.search-form > :nth-child(6)').click()
        cy.get('[class="post-item clearfix"]').contains('QA').should('be.visible')
    })
    it('test gobs search for positio212n',{defaultCommandTimeout:10000}, () => {
        cy.visit('/');
        cy.get('#3').click()
        cy.searchForPosition('QAA')
        cy.get('[class="post-item clearfix"]').contains('QAA').should('be.visible')
        cy.locationss('Montreal')
        cy.get('[class="entry-content"]').contains('Montreal').should('be.visible')
        cy.Companyy('Gorilla')
        cy.get('[class="entry-content"]').contains('Gorilla').should('be.visible')
        
    
    })
})
