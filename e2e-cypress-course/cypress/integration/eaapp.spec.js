/// <reference types="Cypress" />

describe("Test EA Application", () => {

    before("Login to application", () => {

        cy.visit("http://eaapp.somee.com/");
        cy.fixture("eauser").as("user");

        cy.get("@user").then((user) => {
            cy.login(user.UserName, user.Password);
        })
    })
    it("Perfoming Benefit check", () => {
        //Click Employee List
        cy.contains("Employee List").click();

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