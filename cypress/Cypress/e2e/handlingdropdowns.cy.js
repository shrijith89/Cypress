describe("Dropdown Test Suite", ()=>{
    it("handlingDD", ()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html");
        cy.get("select[class='globalcountrycode']").select("Afghanistan").should('have.value', 'Afghanistan');
    })

    it("handleBootstrapDD", ()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-reasondummy-container").click();
        cy.get(".select2-search__field").type("Car Rental").type('{enter}');
        cy.get("#select2-reasondummy-container").contains("Car rental");

    })
})