describe('First test', () => {
    it('test1', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.contains('button','Login').click()
        cy.wait(5000)
    })

})