describe("Handling Tabs", ()=>{
    it("handling child tab", ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get('a').contains('Click Here').invoke('removeAttr', 'target').click();
        cy.get('h3').contains('New Window').should('be.visible');
    })
})