class HomePage {

    visitHomepage() {
        cy.visit(Cypress.env("webdriverUni_homepage"));
    }

    clickOn_Contactus_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click();
    }

}
export default HomePage;