/// <reference types="Cypress" />

describe("Verify different mouse actions  via webdriver uni", () => {
    it("Scroll element in to the view", ()=>{
        
        cy.visit("http://www.webdriveruniversity.com/");
        // invoke jQuery method 'removeAttr' to remove attribute "target="_blank" which triggered the new tab opening after click on the link
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
    
    });

    it("Verify drag and drop", ()=>{
        
        cy.visit("http://www.webdriveruniversity.com/");
        // invoke jQuery method 'removeAttr' to remove attribute "target="_blank" which triggered the new tab opening after click on the link
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();

        cy.get("#draggable").trigger('mousedown', {which: 1});
        cy.get("#droppable").trigger('mousemove').trigger('mouseup', {force:true});
    });

    it("Verify mouse double click", ()=>{
        
        cy.visit("http://www.webdriveruniversity.com/");
        // invoke jQuery method 'removeAttr' to remove attribute "target="_blank" which triggered the new tab opening after click on the link
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();

        cy.get("#double-click").dblclick();
        
    });

    it.only("I should be able to hold down the left mouse click on a given element", ()=>{
        
        cy.visit("http://www.webdriveruniversity.com/");
        // invoke jQuery method 'removeAttr' to remove attribute "target="_blank" which triggered the new tab opening after click on the link
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();

        cy.get("#click-box").trigger('mousedown').then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)');

        })
        
    });
    
})