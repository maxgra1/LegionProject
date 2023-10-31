///<reference types = "Cypress"/>
describe('sanity spec', { defaultCommandTimeout: 10000 }, () => {
  const baseurl = 'https://consumersenergymanagement.ca/savings-calculator/';
  beforeEach(() => {
    cy.viewport(1980, 1080)
  });
  it('select provice', () => {
    cy.visit(baseurl)
    cy.Selected('[name="nastates"]', 'Alabama')
    cy.Selected('[name="nastates"]', 'Arkansas')
    cy.Selected('[name="nastates"]', 'Alberta')
    cy.Selected('[name="nastates"]', 'Arizona')
    cy.Selected('[name="nastates"]', 'California')
    cy.Selected('[name="nastates"]', 'Iowa')
    cy.Selected('[name="nastates"]', 'Colorado')
    cy.Selected('[name="nastates"]', 'Connecticut')
    cy.Selected('[name="nastates"]', 'Georgia')
    cy.Selected('[name="nastates"]', 'Delaware')
    cy.Selected('[name="nastates"]', 'Hawaii')
    //similar fo all province
  })
  it('Test city fo every province', () => {
    cy.visit(baseurl)
    cy.Provincete('Alabama', 'AL-Mobile')
    cy.Provincete('Alaska', 'AK-Barrow')
    cy.Provincete('Arizona', 'AZ-Flagstaff')
    cy.Provincete('Arkansas', 'AR-Fort Smith')
    cy.Provincete('California', 'CA-San Diego')
    cy.Provincete('Colorado', 'CO-Alamosa')
    cy.Provincete('Florida', 'FL-Jacksonville')
    //similar fo all province
  })



})
