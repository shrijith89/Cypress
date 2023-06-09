
import 'cypress-iframe'

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

    it("Handling multiple tabs", ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");   
        cy.xpath("//a[text()='Click Here']").invoke('removeAttr','target').click();
        cy.wait(2000);
        cy.url().should('eq',"https://the-internet.herokuapp.com/windows/new");
        cy.wait(2000);
        cy.go('back');
    })

    it("handling multiple tabs approach 2", ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");

        cy.xpath("//a[text()='Click Here']").then((e) =>{
            let url = e.prop('href');
            cy.visit(url);
        })


        cy.url().should('include',"https://the-internet.herokuapp.com/windows/new");

    })

    it("handling iframes", ()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe");

        let iframe = cy.get("#mce_0_ifr").its('0.contentDocument.body').should('be.visible').then(cy.wrap);

        iframe.clear().type("Welcome Alien {ctrl+A}");
        cy.get("button[aria-label='Italic']").click();

    })

    it("handling iframe approach 2", ()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded("#mce_0_ifr");
        cy.iframe("#mce_0_ifr").clear().type("Welcome Alien {ctrl+A}");
        cy.get("button[aria-label='Italic']").click();
    })

    it.only("handling mouse actions", ()=>{
        cy.visit("https://demo.opencart.com/");
        cy.xpath("//a[text()='Desktops']/parent::li/div/div/ul/li").should('not.be.visible')
        cy.xpath("//a[text()='Desktops']").trigger('mouseover').click();
        cy.xpath("//a[text()='Desktops']/parent::li/div/div/ul/li").should('be.visible')
    })
})