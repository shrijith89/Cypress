class Login{

    userName = "input[name='username']";
    password = "input[name='password']";
    submitButton = "button[type='submit']";
    dashBoard = "Dashboard";
    
    setUserName(username){
        cy.get(this.userName).type(username)
    }

    setPassword(password){
        cy.get(tis.password).type(password)
    }

    clickLogin(){
        cy.get().click();
    }

    verifyLogin(){
        cy.contains('Dashboard').should('be.visible');
    }
}

export default Login;