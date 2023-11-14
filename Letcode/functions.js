class functions{
mouseoveruser(mouseover1,mouseover2,mouseover3){
    cy.get(global.selectors.mouseover1).trigger("mouseover")
     cy.get(global.selectors.mouseover2).trigger("mouseover")
     cy.get(global.selectors.mouseover3).trigger("mouseover")
}
scrollinguser(scrolling1,scrolling2){
    cy.get(global.selectors.scrolling1).scrollIntoView()
    cy.get(global.selectors.scrolling2).scrollIntoView()
}
}
export default functions;