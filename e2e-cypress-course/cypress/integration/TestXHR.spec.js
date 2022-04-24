/// <reference types="Cypress" />

describe("Test LambdaTest Website XHR", () => {
    
    before("Navigate to LambdaTest", () => {
        cy.visit("https://accounts.lambdatest.com/login");
    })

    it("Perform Login and verify XHR", () => {
        //Start the server
        //cy.server() and cy.route() are deprecated
        cy.intercept({
            method:'GET',
            url: '/api/user/organization/team'
        }).as('team');

        cy.fixture("Lambdauser").as("lamdauser");

        cy.get("@lamdauser").then((lamdauser) => {
            cy.get("[name='email']").debug().type(lamdauser.UserName);
            cy.get("[name='password']").debug().type(lamdauser.Password, { log: false });
        });

        cy.get("[class='rounded block w-full text-size-14 h-40 tracking-widest font-bold uppercase g-recaptcha bg-black text-white disabled:opacity-50']").click();

        // cy.get('@team').then((xhr) => {
        //     expect(xhr.status).to.eq(200);
        //     expect(xhr.response.body.data[0]).to.have.property("name");
        // }); //this is not working

        cy.wait('@team').its('response.statusCode').should('be.oneOf', [200, 304]);

        cy.get('@team').then((xhr) => {
            expect(xhr.response.body.data[0]).to.have.property("name","Gabriela O");
            expect(xhr.response.body.data[0]).to.have.property("role","Admin");
        });


    }); 
});