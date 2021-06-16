class AutomationStoreHaircarePage {
    addHaircareProductsToBaskets() {
        globalThis.data.productName.forEach((name) => {
            cy.addProductToBasket(name);
        })
    }
}
export default AutomationStoreHaircarePage;