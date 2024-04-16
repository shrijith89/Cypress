describe('Example', ()=> {

  before("Before method", ()=>{
    cy.viewport(1200, 800);
    cy.visit('https://admin.talview.org/login?redirect_url=https%253A%252F%252Fwt.talview.org%252Fworkflow&username=ashwini.s+master-recruiter@talview.com');
    cy.get("input[type='password']").should('be.visible');
    cy.fixture('example.json').then((data)=> {
    cy.get("input[type='password']").type(data.password)
    cy.get("input[type='password']").should('have.value', "Shri@098");
    cy.get("input[type='password']").should('not.have.value', "Shri@98");
    cy.contains('div', 'Sign In').click()
    cy.wait(5000);
    cy.contains('span', 'Create Workflow', {timeout:20000}).should('be.visible');
    cy.wait(4000);
  })
})

  it('Creating Workflow', () => {
    cy.contains('span', 'Create Workflow').click();
    cy.contains('div', "What's the job role you're hiring for?").should('have.text',"What's the job role you're hiring for?");
    cy.wait(4000);
    cy.get("div[data-testid='Business Analyst-template']").scrollIntoView().click({force:true});
    cy.wait(5000);
    cy.get('.h-20 > .bg-blue-700').should('be.visible');
    cy.get('.h-20 > .bg-blue-700').scrollIntoView().click({force:true});
    cy.wait(15000);
    cy.get('span').contains('Create a Drive', {timeout:6000}).should('be.visible');
    cy.contains('span', 'Invite').click();
    cy.contains('span', 'Add Candidate').should('be.visible');
    cy.contains('span', 'Add Candidate').click();
    cy.get("input[data-testid='invite-name']").type("Shrijith");
    cy.get("#email-input").type("sandeshkaranth90+333@gmail.com");
    cy.wait(5000);
    cy.contains('span', 'Add').should('be.visible');
    cy.get('button>span').contains('Add').click();
    cy.wait(5000)
    cy.get("div[title='sandeshkaranth90+333@gmail.com']", {timeout:10000}).should('be.visible');
    cy.get("div[class='flex']>button[type='button']").click({force:true});
    cy.wait(5000);

  })
  })
