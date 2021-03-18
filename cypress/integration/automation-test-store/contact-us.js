/// <reference types="Cypress" />

describe("Test contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via Contact Us form", ()=>{
        
        cy.visit('https://automationteststore.com/');
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click();
        cy.get('#ContactUsFrm_first_name').type('Nadeera');
        cy.get('#ContactUsFrm_email').type('test@gmail.com');
        cy.get('#ContactUsFrm_enquiry').type('Do you have Nvidia GTX 3060 in stock');
        cy.get('button[title="Submit"]').click();

    })
})