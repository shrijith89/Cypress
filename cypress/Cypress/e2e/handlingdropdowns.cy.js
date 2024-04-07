describe("Dropdown Test Suite", ()=>{
    it.skip("handlingDD", ()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html");
        cy.get("select[class='globalcountrycode']").select("Afghanistan").should('have.value', 'Afghanistan');
    })

    it.skip("handleBootstrapDD", ()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-reasondummy-container").click();
        cy.get(".select2-search__field").type("Car Rental").type('{enter}');
        cy.get("#select2-reasondummy-container").contains("Car rental");

    })

    it.skip("autosuggestionDD", ()=>{
        cy.visit("https://www.wikipedia.org/");
        cy.get("input#searchInput").type("Delhi");
        cy.get(".suggestion-title").contains("Delhi").then(option => {
            cy.wrap(option).contains("Delhi").click();
        })

    })

    it.skip("autosuggestionDD1", ()=>{
        cy.visit("https://www.wikipedia.org/");
        cy.get("input#searchInput").type("Delhi");
        cy.get(".suggestion-title").contains("Delhi").click(); 
    })

    it.skip("autosuggestion dropdown", ()=>{
        cy.visit("https://www.google.com/");
        cy.get("textarea[name='q']").type("Cypress automation tool");
        cy.get("li[role='presentation']").contains("cypress automation tool").click();
        cy.get("textarea[name='q']").contains("cypress automation tool");

    })

    it("autosuggestion dropdown using each", ()=>{
        cy.visit("https://www.google.com/");
        cy.get("textarea[name='q']").type("Cypress automation tool");
        cy.wait(2000);
        cy.get("div[role='presentation']>span").each(($el, index, $list) =>{
            if($el.text() == 'cypress automation tool'){
                cy.wrap($el).click();
            }
        })
        cy.get("textarea[name='q']").contains("cypress automation tool");
    })

})