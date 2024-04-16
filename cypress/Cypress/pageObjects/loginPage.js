class Login{

    setUserName(username){
        cy.get("input[name='username']").type(username)
    }

    setPassword(password){
        cy.get("input[name='password']").type(password)
    }

    clickLogin(){
        cy.get("button[type='submit']").click();
    }

    verifyLogin(){
        cy.contains('h6', 'Dashboard').should('be.visible');
    }
}

export default Login;