define("Test Suite",()=>{
    it("handling alerts",()=>{
        cy.wait(3000);
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.wait(2000);
        cy.xpath("//button[@onclick='jsAlert()']").click();

        cy.on("window:alert", (t)=>{
            expect(t).to.contains("I am a JS Alert")
        })

        
    })

    it("Test",()=>{
        cy.visit("https://www.google.com")
    })

    it.only("Handling multiple tabs", ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");   
        cy.xpath("//a[text()='Click Here']").invoke('removeAttr','target').click();
        cy.wait(2000);
        cy.url().should('eq',"https://the-internet.herokuapp.com/windows/new");
    })
})