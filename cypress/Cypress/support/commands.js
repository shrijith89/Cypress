// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types='Cypress' />
///<reference types='cypress-xpath' />

// Cypress.Commands.add('getIframe', (iframe)=>{
//     return cy.get(iframe).its('0.contentDocument.body')
//         .should('be.visible')
//         .then(cy.wrap)
// })

// Cypress.Commands.overwriteQuery('contains', (originalFn, subject, filter, text, options = {}) => {
//     if (typeof text === 'object') {
//         options = text;
//         text = filter;
//         filter = undefined;
//     }
//     options.matchCase = false;
//     return originalFn(subject, text, options);
// });

Cypress.Commands.add('login', ()=>{
    cy.visit('https://admin.talview.org/login?redirect_url=https%253A%252F%252Fwt.talview.org%252Fworkflow&username=ashwini.s+master-recruiter@talview.com');
    cy.get("input[type='password']").should('be.visible');
    cy.fixture('example.json').then((data)=> {
    cy.get("input[type='password']").type(data.password)
    cy.get("input[type='password']").should('have.value', "Shri@098");
    cy.get("input[type='password']").should('not.have.value', "Shri@98");
    cy.contains('div', 'Sign In').click()
})
})
