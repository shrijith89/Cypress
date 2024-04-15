describe("Navigation Suite", ()=>{
    it("navigation", () =>{
        cy.visit("demo.opencart.com");

        cy.contains('a', "Tablets").click();
        cy.get("#compare-total").should('be.visible');
        cy.wait(2000);

        cy.go('back');
        cy.wait(2000);
        cy.contains('h3', 'Featured').should('be.visible');

        cy.go(+1);
        cy.wait(1000);
        cy.get("#compare-total").should('be.visible');

        cy.wait(1000);
        cy.go(-1);
        cy.contains('h3', 'Featured').should('be.visible');
    })
})