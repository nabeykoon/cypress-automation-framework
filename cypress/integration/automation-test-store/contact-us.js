/// <reference types="Cypress" />

describe("Test contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via Contact Us form", ()=>{
        
        cy.visit('https://automationteststore.com/');
        cy.get('a[href$="contact"]').click().then((linkText) => {
            cy.log("Selected link text: " + linkText.text())
        }); //xpath -> //a[text()='Contact Us']
        cy.get('#ContactUsFrm_first_name').type('Nadeera');
        cy.get('#ContactUsFrm_email').type('test@gmail.com');
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type('Do you have Nvidia GTX 3060 in stock');
        //xpath locators can be used with the library cypress-io/cypress-xpath
        //cy.xpath('//textarea[@id="ContactUsFrm_enquiry"]').type('Do you have Nvidia GTX 3060 in stock');
        cy.get('button[title="Submit"]').click();
        cy.xpath('//p[contains(text(), "Your enquiry has been")]').should('have.text', 'Your enquiry has been successfully sent to the store owner!');


    })
})