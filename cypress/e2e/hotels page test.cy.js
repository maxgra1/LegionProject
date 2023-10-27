describe('Hotels Page Test', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  const hotelListPageUrl = 'https://www.accesstravel.com/en-US/Hotel/List';
  const cargrouplist = '[name="filter.destinationid"]'
  beforeEach(() => {
    cy.visit(hotelListPageUrl);
    cy.viewport(1980,1080)
  });

  it('Verify cities: Jerusalem, London, and New York are on the list', () => {
    cy.get('#Filter_DestinationId').select('Jerusalem')
    cy.get('#Filter_DestinationId').select('London')
    cy.get('#Filter_DestinationId').select('New York')
  });
  it('choosing a valid number of children', () => {
    cy.get('#Filter_ChildrenNum').should('be.visible');
    cy.get('#Filter_ChildrenNum').clear().type('1').should('have.value','1');
    cy.get('.hotels-wrap').click();
    cy.get('.row.children-age').should('be.visible');
    cy.get('input[name="Filter.ChildrensAge[0]"]').clear().type('1');
  });
  it('Negative Test - invalid dates should trigger an error', () => {
    // Assuming the input IDs for check-in and check-out dates are '#checkInDate' and '#checkOutDate'
    cy.get('#Filter_DestinationId').select('Jerusalem')
    cy.get('[name="Filter.CheckIn"]').clear();
    cy.get('[name="Filter.CheckIn"]').type('2023-10-30');
    cy.get('[name="Filter.CheckOut"]').clear();
    cy.get('[name="Filter.CheckOut"]').type('2023-10-29');
    cy.get('button').contains('Search').click();
    cy.get('[class="field-validation-error"]').should('be.visible'); // You will need to adjust based on the actual error message selector
  });
})
