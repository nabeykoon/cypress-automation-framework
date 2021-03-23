/// <reference types="Cypress" />

describe("Test contact Us form via WebDriverUniversity", () => {
    it("Should be able to submit a successful submission via Contact Us form", ()=>{
        
        //cy.visit("http://www.webdriveruniversity.com/");
        //cy.get("#contact-us").click();
        // older cypress version Ex: 4.5.0, you should use click with argument click({force: true}) since this element dimension is 0X0 pixels and it is not visible.
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        cy.get('input[name="first_name"]').type("Nadeera");
        cy.get('input[name="last_name"]').type("Abeykoon");
        cy.get('input[name="email"]').type("test1984@gmail.com");
        cy.get('textarea[name="message"]').type("This is a submission of test contact us page");
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@id="contact_reply"]//h1').should('have.text', "Thank You for your Message!");
    })
//run only one test 'it.only' 
    it("Should NOT be able to submit a submission via Contact Us form due to all mandatory fields", ()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('input[name="first_name"]').type("Supipi");
        cy.get('input[name="last_name"]').type("Abeykoon");
        cy.get('textarea[name="message"]').type("This is a submission of test contact us page");
        cy.get('input[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required')
    })

})