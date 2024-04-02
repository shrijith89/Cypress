describe("Test Suite", ()=>{
    it("Google", ()=>{
        cy.visit("https://www.google.com");
        cy.get("img[alt='Google']").should('be.visible');
    })
})