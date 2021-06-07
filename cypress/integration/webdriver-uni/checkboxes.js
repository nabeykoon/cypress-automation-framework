/// <reference types="Cypress" />

describe("Verify Checkboxes via Webdriver uni", () => {

    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com/");
        // invoke jQuery method 'removeAttr' to remove attribute "target="_blank" which triggered the new tab opening after click on the link
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click();
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