describe("Handling DD and RB",()=>{
    it("Handling DD",()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");

        cy.get("#female").click().should("be.checked");
        cy.get("#male").should("not.be.checked");
        
        cy.get("#male").check().should("be.checked");
        cy.get("#female").should("not.be.checked");
    })
})