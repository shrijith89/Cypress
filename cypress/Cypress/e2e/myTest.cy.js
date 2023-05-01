describe('First test', () => {
    it('test1', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.xpath('.name').contains('username').type('Admin')
        cy.xpath('.name').contains('password').type('admin123')
        cy.xpath('button').contains('Login').click();
        cy.wait(5000)
    })

})