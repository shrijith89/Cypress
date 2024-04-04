describe("checkboxes testsuite", ()=>{
    it("handling checkboxes", ()=>{
        cy.visit("https://practice.expandtesting.com/checkboxes");
        cy.get("input[id='checkbox1']").check().should('be.checked');
        cy.get("input[id='checkbox2']").uncheck().should('not.be.checked');
    })
})