describe("Test Suite customCommands", ()=>{
    it("custom commands", ()=>{
        cy.visit("https://demo.nopcommerce.com/");
        cy.getLink('Apple MacBook Pro 13-inch');
        cy.contains('h1', 'Apple MacBook Pro 13-inch').should('be.visible')
    })
})