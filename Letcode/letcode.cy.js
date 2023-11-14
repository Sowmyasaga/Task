import functions from "../../../pom/functions";

describe("TestSuites 1", function () {

    const obj= new functions();

    it("TC:1, Verify navigation to url", () => {
        cy.navigateToUrl();
    })

    it("TC:2, Verify Signup page functionality", () => {
        cy.signUp();
    })

    it("TC:3; Verify Dropdown functionality", () => {
        cy.dropDown();
     })

    it("TC:4, Verify Calendar functionality", () => {
        cy.calendar();
         })

    it("TC:5, Verify Radio functionality", () => {
        cy.radio();   
    })

    it("TC:6, Verify Checkbox functionality", () => {
        cy.checkbox();
        })
    it("TC:7, Verify Mouseover action", () =>{
        cy.mouseover();
        obj.mouseoveruser();
    })

   it("TC:8, Verify Scroll the page up and down", () =>{
        cy.scrolling();
        obj.scrollinguser();
    }) 

    it("TC:9, Verify Alerts functionality", () =>{
        cy.alert();
    })

    it("TC:10, Verify forms page functionality", () =>{
        cy.formsPage();
    })

})
