/// <reference types="cypress" />

describe("Testing of EA App", () => {
    beforeEach("Call for a particular it block", () => {
        cy.visit("http://www.executeautomation.com/site");
    })

    it(" Testing EA Site for assertion", () => {
        cy.visit("http://www.executeautomation.com/site");

        //Implicit wait
        // cy.get("jump to slide 2'",{timeout:60000})
        // .should('have.class','ls-nav-active');

        //Explicit wait - better readbility - in this example the animation is slow so it's recommended to use explicit waiting mecanism
        cy.get("[aria-label='jump to slide 2']",{timeout:60000}).should(($x) => {
            expect($x).to.have.class('ls-nav-active');
        })

        //cy.get("[aria-label='jump to slide 2']",{timeout:60000}).should('have.class', 'ls-nav-active');

    })

})