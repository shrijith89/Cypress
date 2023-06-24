describe("HandlingDD", ()=>{
    it("HandleBootstrapDD",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

        cy.xpath("//span[@aria-label='Country']").click();

        cy.get(".select2-search__field").type("India{enter}");
        })
    })