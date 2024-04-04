describe("Selecting Radio buttons", ()=>{
    it("radio button", ()=> {
        cy.visit("https://www.keynotesupport.com/internet/web-contact-form-example-radio-buttons.shtml");
        cy.get("input[value='QBP']").scrollIntoView();
        cy.get("input[value='QBP']").check();
        cy.get("input[value='QBP']").should('be.checked');
        cy.get("input[value='Photoshop']").should('not.be.checked')
    })
})