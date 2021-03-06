/// <reference types="Cypress" />

describe("Verify Checkboxes via Webdriver uni", () => {

    beforeEach(() => {
        cy.log(Cypress.env("name"));
       cy.navigateTo_WebdriverUni_Checkbox_page();
    })

    it("check and validate checkbox", ()=>{
        cy.get("input[value='option-1']").check().should("be.checked");
    })

    it("uncheck and verify it is unchecked", ()=>{
        cy.get("input[value='option-3']").uncheck().should("not.be.checked");
    })

    it("Check mutiple checkboxes", ()=>{     
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should("be.checked");
    })
})