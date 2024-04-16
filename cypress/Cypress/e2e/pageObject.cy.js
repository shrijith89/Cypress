import Login from "../pageObjects/loginPage.js"

describe("Test Suite", ()=> {
    it("Page Object", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        const test = new Login();
        test.setUserName("Admin")
        test.setPassword("admin123")
        test.clickLogin();
        test.verifyLogin();
    })
})