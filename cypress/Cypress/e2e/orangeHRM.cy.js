describe("Orange HRM", ()=>{
    it("Test Login", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.wait("input[name='username']").should('be.visible');
        cy.get("input[name='username']").type("Admin");
        cy.get("input[name='password']").type("admin123");
        cy.get('button').contains('Login').click();
        cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
        cy.get('h6').contains('Dashboard').then((x)=> {
            let actual_value = "dash";
            expect(actual_value).to.be.equal("Dashboard");
            expect(actual_value).to.not.be.equal("Dashboard1");

            assert.equal(actual_value, 'Dashboard');
            assert.not.equal(actual_value, 'Dashbaord1');
        })
    })
})