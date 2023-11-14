// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("navigateToUrl", ()=> {
    cy.logMessage("Navigate to URL")
    cy.visit(global.testdata.base_url)
    cy.logMessage("Verify whether url navigates to correct site")
    cy.url().should('contain', 'letcode.in/')
        .and('not.contain', 'codetest.com')
        cy.logMessage("Verify whether logo is visible")
    cy.get(global.selectors.logo).should('be.visible')
    cy.wait(4000)
    cy.reload()
} )

Cypress.Commands.add("logMessage", function(LogMessage) {
    
    cy.allure().step(LogMessage)
    cy.task("out", LogMessage);
   })

Cypress.Commands.add("signUp", ()=> {
    cy.logMessage("Navigate to url")
    cy.visit(global.testdata.base_url)
    cy.logMessage("Click on burger menu")
    cy.get(global.selectors.burger_button).click()
    cy.logMessage("Clcik on signuo link")
    cy.get(global.selectors.signup_link).click()
    cy.logMessage("Enter name")
    cy.get(global.selectors.name).type(global.testdata.name)
    cy.logMessage("Enter Email")
    cy.get(global.selectors.email).type(global.testdata.email)
    cy.logMessage("Enter password")
    cy.get(global.selectors.password).type(global.testdata.password)
    cy.logMessage("Click on checkbox")
    cy.get(global.selectors.checkbox).check()
    cy.logMessage("Click on signup button")
    cy.get(global.selectors.signup_button).click()
    cy.on('window:alert', (t) => {
        expect(t).to.contain('The email address is already in use by another account.')
    })
//    cy.wait(3000)
    cy.get(global.selectors.alert_close_btn).click()
})
Cypress.Commands.add("dropDown", ()=> {
        cy.logMessage("Navigate to url")
        cy.visit(global.testdata.base_url)
        cy.logMessage("Click on burger menu")
        cy.get(global.selectors.burger_button).click()
        cy.logMessage("Click on workspace")
        cy.get(global.selectors.testing).click()
        cy.logMessage("Click on dropdown tabs")
        cy.get(global.selectors.dropdown_items).click()
        cy.logMessage("verify dropdown functionality")
        cy.get("#country").select('India')
             .should('have.value', 'India')
        cy.wait(3000)
    })
Cypress.Commands.add("calendar", ()=> {
        cy.logMessage("Navigate to url")
        cy.visit(global.testdata.base_url)
        cy.logMessage("Click on burger menu")
        cy.get(global.selectors.burger_button).click()
        cy.logMessage("Click on workspace")
        cy.get(global.selectors.testing).click()
        cy.logMessage("Click on calendar tabs")
        cy.get(global.selectors.calendar).click()
        cy.logMessage("verify calendar functionality")
        cy.get("div[class='datetimepicker is-danger is-active'] div[class='datepicker-days']").should('be.visible')
        cy.get("div.datetimepicker.is-danger.is-active div.datepicker").invoke('text').then((text) => {
            cy.log(text);
         });
        cy.get("div[class='datetimepicker is-danger is-active'] div[class='datepicker-days']").contains('30').click()
    })
Cypress.Commands.add("radio", ()=> {
        cy.logMessage("Navigate to url")
        cy.visit(global.testdata.base_url)
        cy.logMessage("Click on burger menu")
        cy.get(global.selectors.burger_button).click()
        cy.logMessage("Click on workspace")
        cy.get(global.selectors.testing).click()
        cy.logMessage("Click on radio button tabs")
        cy.get(global.selectors.radio).click()
        cy.logMessage("verify radio button functionality")
        cy.get("#one").check().should('be.checked')
        cy.get("#two").check().should('be.checked')     
    })
Cypress.Commands.add("checkbox", ()=> {
        cy.logMessage("Navigate to url")
        cy.visit(global.testdata.base_url)
        cy.logMessage("Click on burger menu")
        cy.get(global.selectors.burger_button).click()
        cy.logMessage("Click on workspace")
        cy.get(global.selectors.testing).click()
        cy.logMessage("Click on checkbox button tabs")
        cy.get(global.selectors.radio).click()
        cy.wait(3000)
        cy.logMessage("verify checkbox button functionality")
        cy.get(":nth-child(6) > .checkbox > input").uncheck().should('not.be.checked')
        cy.wait(3000)
        cy.get(":nth-child(7) > .checkbox > input").check().should('be.checked')
    })
Cypress.Commands.add("mouseover", ()=> {
        cy.logMessage("Navigate to url")
        cy.visit(global.testdata.base_url)
        cy.logMessage("Click on burger menu")
        cy.get(global.selectors.burger_button).click()
        cy.logMessage("verify the mouseover functionality")
     })
Cypress.Commands.add("scrolling", ()=> {
        cy.logMessage("Navigate to url")
        cy.visit(global.testdata.base_url)
        cy.get(global.selectors.logo).click()
        cy.logMessage("verify the scrolling functionality")
        cy.get(global.selectors.scrolling1).scrollIntoView()
        cy.get(global.selectors.scrolling2).scrollIntoView()
    })
Cypress.Commands.add("alert", ()=> {
        cy.logMessage("Navigate to url")
        cy.visit(global.testdata.base_url)
        cy.logMessage("verify the scrolling functionality")
        cy.get(global.selectors.burger_button).click()
        cy.logMessage("Click on workspace")
        cy.get(global.selectors.testing).click()
        cy.logMessage("Click on alert tabs")
        cy.get(global.selectors.alert).click()
        cy.logMessage("verify the alerts functionality")
        cy.get(global.selectors.alert_button).click()
        cy.on('window:alert', (t) => {
            expect(t).to.contain('Hey! Welcome to LetCode')
                    })
    })
Cypress.Commands.add("formsPage", ()=> {
        cy.logMessage("Navigate to url")
        cy.visit(global.testdata.base_url)
        cy.logMessage("Click on burger menu")
        cy.get(global.selectors.burger_button).click()
        cy.logMessage("Click on workspace")
        cy.get(global.selectors.testing).click()
        cy.logMessage("verify the forms input functionality")
        cy.get(global.selectors.forms).click()
        cy.logMessage("Enter firstname")
        cy.get(global.selectors.firstname).type(global.testdata.firstname)
        cy.logMessage("Enter lastname")
        cy.get(global.selectors.lastname).type(global.testdata.Lastname)
        cy.logMessage("Enter Email")
        cy.get(global.selectors.enteremail).clear()
        cy.get(global.selectors.enteremail).type(global.testdata.email1)
        cy.logMessage("Select Country code")
        cy.get(":nth-child(2) > :nth-child(2) > .field > .control > .select > select").select('India (+91)')
        cy.logMessage("Enter Phone Number")
        cy.get(global.selectors.phone).type(global.testdata.phonenumber)
        cy.logMessage("Enter Address 1")
        cy.get(global.selectors.address1).type(global.testdata.address1)
        cy.logMessage("Enter Address 2")
        cy.get(global.selectors.address2).type(global.testdata.address2)
        cy.logMessage("Enter State")
        cy.get(global.selectors.state).type(global.testdata.state)
        cy.logMessage("Enter post code")
        cy.get(global.selectors.pin).type(global.testdata.pin)
        cy.logMessage("Select Country")
        cy.get(":nth-child(5) > :nth-child(2) > .field > .control > .select > select").select('India')
        cy.logMessage("Enter date of birth")
        cy.get(global.selectors.date).type(global.testdata.date)
        cy.logMessage("Select Radio button")
        cy.get("#female").check().should('be.checked')
        cy.logMessage("Select checkbox")
        cy.get("input[type='checkbox']").check().should('be.checked')
        cy.logMessage("Click on submit button")
        cy.get("input[type='submit']").click()
    })






