///<reference types = "Cypress"/>
describe('sanity spec', { defaultCommandTimeout: 10000 }, () => {
  const baseurl = 'https://consumersenergymanagement.ca/savings-calculator/';
  beforeEach(() => {
    cy.viewport(1980, 1080)
  });
  //it('select provice', () => {
  // cy.visit(baseurl)
  //cy.get('[name="nastates"]').select('Alaska')
  // cy.get('[name="stage2"]').select('AK-Barrow')  
  //cy.get('[name="stories"]').select('3')
  //cy.get('[name="squarefeet"]').select('2000')
  //cy.get('input[name="houseage"]').type('30')
  // })
  it('step 2', () => {
    cy.visit(baseurl)
    cy.get('[name="nastates"]').select('Alabama')
    cy.get('[name="stage2"]').select('AL-Mobile')
    cy.get('[name="stories"]').select('1 + Basement')
    cy.get('[name="squarefeet"]').select('750')
    cy.get('input[name="houseage"]').type('70')
    cy.get('[name="gastherm"]').clear().type('40{enter}')
    cy.get('[name="propaneGas"]').clear().type('40{enter}')
    cy.get('[id="heattype"]').select('aNaturalGas')
    cy.get('[id="CHC"]').invoke('text').should('not.equal', '$0.00')
    cy.get('[name="heatingtype"]').select('Electric')
    cy.get('[id="NHC"]').invoke('text').should('not.equal', '$0.00')
    cy.get('[id="VTAS"]').invoke('text').should('not.equal', '$0.00')
    cy.get('[id="VTES"]').invoke('text').should('not.equal', '$0.00') 
    ///fdfdsfsdxss
  })
})
