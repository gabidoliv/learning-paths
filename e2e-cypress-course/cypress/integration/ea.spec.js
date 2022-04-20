/// <reference types="cypress" />

describe("Testing of EA App", () => {

    it.only(" Testing EA Site for assertion", () => {
        cy.visit("http://www.executeautomation.com/site");

        //Implicit wait
        // cy.get("jump to slide 2'",{timeout:60000})
        // .should('have.class','ls-nav-active');

        //Explicit wait - better readbility 
        cy.get("[aria-label='jump to slide 2']", { timeout: 60000 }).should(($x) => {
            expect($x).to.have.class('ls-nav-active');
        })

        // In the example the animation is slow so it's recommended to use explicit waiting mecanism
        //cy.get("[aria-label='jump to slide 2']",{timeout:60000}).should('have.class', 'ls-nav-active');

    })
    it("Login application", () => {
        cy.visit("http://eaapp.somee.com/");


        //cy.contains("Login").click();

        // Long way of working with Promise (Closure)
        // cy.get("#loginLink").then(($link) => {
        //     return $link.text();
        // }).as("linkText");

        // Shorthand way of working with promise using invoke
        cy.get("#loginLink").invoke('text').as("linkText");

        cy.contains("Login").click();

        cy.get("@linkText").then(($x) => {
            expect($x).is.eql('Login');
        })

        cy.url().should("include", "Account/Login");

        cy.get("#UserName").type("admin");

        cy.get("#Password").type("password");

        cy.get(".btn").click({ force: true });

        //Click Employee List
        cy.contains("Employee List").click();

        Table
        cy.get('.table').find('tr').contains('Prashanth').parent().contains('Benefits').click();

        cy.get('.table').find('tr').as("rows");

        cy.get("@rows").then(($row) => {

            cy.wrap($row).click({ multiple: true });

        })

        //Verify the value from a property
        cy.wrap({ name: 'Karthik' }).should('have.property', 'name').and('eq', 'Karthik');

        //Using here - not the more useful or handy method to work with
        // cy.get('.table').find('tr > td').then(($td) => {
        //     cy.wrap($td).contains("John").invoke("wrap").parent().contains("Benefits").click();
        // })

    })



})