describe("Handling Tabs", ()=>{
    it("handling child tab", ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get('a').contains('Click Here').invoke('removeAttr', 'target').click();
        cy.get('h3').contains('New Window').should('be.visible');
    })

    it("handling child tab", ()=>{
        let url = "https://the-internet.herokuapp.com/windows";
        let href = "";
        cy.visit(url);
        cy.get('a').contains('Click Here').then((e) =>{
            let url = e.prop('href');
            console.log("href value", url)
            cy.visit(url);
        })        
        cy.get('h3').contains('New Window').should('be.visible');

    })
})