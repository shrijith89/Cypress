describe("Dropdown Test Suite", ()=>{
    it("handlingDD", ()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html");
        cy.get("select[class='globalcountrycode']").select("Afghanistan").should('have.value', 'Afghanistan');
    })
})