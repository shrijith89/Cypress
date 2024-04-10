
describe("test suite", ()=> {


before("Before method", () => {
    cy.visit("https://www.google.com")
    cy.log("Before method")
})

beforeEach("Before each method", ()=>{
    cy.log("Before each method")
})

it("Test01", ()=>{
    cy.log("This is test 1")
})

it("Test02", ()=>{
    cy.log("This is test 02")
})

afterEach("After each Method", ()=>{
    cy.log("This is a after each method")
})

after("After nethod", ()=>{
    cy.log("This is a after method");
})

})