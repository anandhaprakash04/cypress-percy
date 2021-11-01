/// <reference types="cypress" />

describe('example to-do app', () => {

  it('displays two todo items by default', () => {
    cy.visit('https://www.softwareadvice.com/crm/salesforce-profile/?automated=true&gtm=false');
    cy.percySnapshot();
  })
})