import 'cypress-mochawesome-reporter/register';


describe("Test Suite customCommands", ()=>{
    it("custom commands", ()=>{
        cy.visit("https://demo.nopcommerce.com/").screenshot("Homepage");
        cy.contains('apple MacBook Pro 13-inch').should('be.visible').screenshot("Logo");
    })
})