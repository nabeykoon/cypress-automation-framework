/// <reference types="Cypress" />

describe("Test contact Us form via WebDriverUniversity", () => {
    before(() =>{
        cy.fixture('example.json').then((data) => {
            //this.data = data;
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        cy.visit(Cypress.env("webdriverUni_homepage") + "/Contact-Us/contactus.html");
    })

    it("Should be able to submit a successful submission via Contact Us form", ()=>{
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        // cy.get('input[name="first_name"]').type(data.first_name);
        // cy.get('input[name="last_name"]').type(data.last_name);
        // cy.get('input[name="email"]').type(data.email);
        // cy.get('textarea[name="message"]').type("This is a submission of test contact us page");
        // cy.get('input[type="submit"]').click();

        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, "This is a submission of test contact us page")
        cy.xpath('//div[@id="contact_reply"]//h1').should('have.text', "Thank You for your Message!");
    })
//run only one test 'it.only' 
    it("Should NOT be able to submit a submission via Contact Us form due to all mandatory fields", ()=>{
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        // cy.get('input[name="first_name"]').type(data.first_name);
        // cy.get('input[name="last_name"]').type(data.last_name);
        // cy.get('textarea[name="message"]').type("This is a submission of test contact us page");
        // cy.get('input[type="submit"]').click();

        cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), Cypress.env("last_name"), " ", "This is a submission of test contact us page")
        cy.get('body').contains('Error: Invalid email address')
    })

    // OVERIDE ENV VARIABLE USING NPM COMMAND : $(npm bin)/cypress run --browser chrome --spec cypress/integration/webdriver-uni/contact-us.js --env first_name=Tim

})