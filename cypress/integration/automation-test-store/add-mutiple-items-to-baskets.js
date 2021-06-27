import AutomationStoreHomePage from '../../support/pageObjects/automation-test-store/automation-store-home-page';
import AutomationStoreHaircarePage from '../../support/pageObjects/automation-test-store/automation-store-haircare-page';

/// <reference types="Cypress" />

describe("Add mutiple items to basket  ", () => {

    const automationStoreHomePage = new AutomationStoreHomePage();
    const automationStoreHaircarePage = new AutomationStoreHaircarePage();

    before(() => {
        cy.fixture("products").then((data) => {
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        //cy.visit("https://automationteststore.com/");
        //cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        automationStoreHomePage.visitHomePage();
        automationStoreHomePage.clickOnHaircareLink();
    })

    it("Add specific item to basket", () => {
        automationStoreHaircarePage.addHaircareProductsToBaskets();
        cy.get(".dropdown-toggle .cart_total").should("have.text", "$46.45").click().debug();
    });
})