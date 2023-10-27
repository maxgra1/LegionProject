describe('Main Menu Sanity Test', () => {
  const baseUrl = 'https://www.accesstravel.com/en-US/Home/Index';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.viewport(1980,1080)
  });

  it('Verify main page categories and menu options', () => {
    cy.get('.hotels').should('contain', 'Hotels');
     cy.get('.guides').should('contain', 'Guides');
    cy.get('.js-list-tours').should('contain', 'Tours');
    cy.get('.attraction-link').should('contain', 'Things to do');
  });

  it('Verify navigation to Hotels', () => {
    cy.get('.hotels').contains('Hotels').click();
    cy.url().should('include', '/Hotel/List');
  });
  it('Verify navigation to Guides', () => {
    cy.get('.guides').contains('Guides').click();
    cy.url().should('include', '/Guide');
  });
  it('Verify navigation to Tours', () => {
    cy.get('.js-list-tours').contains('Tours').click();
    cy.url().should('include', '/Tour/List');
  });
  it('Verify navigation to Things to do', () => {
    cy.get('.attraction-link').contains('Things to do').click();
    cy.url().should('include', '/en-US');
  });
  beforeEach(() => {
    cy.get('.navbar-new')
  });
  

  it('Verify click on Login navigates to dedicated page', () => {
    cy.get('#burger > :nth-child(1)').click();
    cy.get(':nth-child(3) > :nth-child(1) > a').click();
    cy.url().should('include', '/Login');
  });

  it('Verify click on Signup navigates to dedicated page', () => {
    cy.get('#burger > :nth-child(1)').click();
    cy.get('.mobile-menu > :nth-child(3) > :nth-child(2) > a').click();
    cy.url().should('include', '/en-US/Account/Register');
  });

});
