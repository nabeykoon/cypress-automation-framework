/// <reference types="Cypress" />

describe("Add mutiple items to basket  ", () => {

    before(() => {
        cy.fixture("products").then((data) => {
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })

    it("Add specific item to basket", () => {
        globalThis.data.productName.forEach((name) => {
            cy.addProductToBasket(name);
        })
        cy.get(".dropdown-toggle .cart_total").should("have.text", "$46.45").click();
    });
})