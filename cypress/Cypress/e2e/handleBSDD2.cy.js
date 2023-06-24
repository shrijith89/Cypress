describe("Handle Bootstrap dropdown",()=>{
    it("handleBS",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

        cy.xpath("//span[@aria-label='Country']").click();

        cy.xpath("//ul[@id='select2-billing_country-results']/li").contains("Russia").then(option => {
            cy.wrap(option).contains("Russia").click();
        })
    })
})