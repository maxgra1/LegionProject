///<reference types = "Cypress"/>
describe('sanity spec', { defaultCommandTimeout: 10000 }, () => {
  const baseurl = 'https://consumersenergymanagement.ca/';
  beforeEach(() => {
    cy.viewport(1980, 1080)
  });
  it('test jobs page', () => {
    cy.visit(baseurl);
    cy.Navigation('#menu-item-31 > a', 'Home', '/')
    cy.Navigation('#menu-item-36 > a', 'About', '/about-us/')
    cy.Navigation('[id="menu-item-32"]', 'Products', '/products/')
    cy.Navigation('[id="menu-item-34"]', 'Services', '/services/')
    cy.Navigation('[id="menu-item-35"]', 'Tools', '/tools-resources/')
    cy.Navigation('[id="menu-item-673"]', 'Promotions', '/promotions/')
    cy.Navigation('[id="menu-item-1589"]', 'Careers', '/careers/')
    cy.Navigation('[id="menu-item-1725"]', 'Blog', '/blog/')
    cy.Navigation('[id="menu-item-1727"]', 'FAQs', '/faq/')
    cy.Navigation('[id="menu-item-1726"]', 'Contact', '/contact-us/')
  })

})
