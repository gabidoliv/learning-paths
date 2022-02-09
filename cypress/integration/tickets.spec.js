describe("Tickets", () => {
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));

    it("fills all the text input fields", () => {
        const firstName = "Gabriela";
        const lastName = "Oliveira";

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("gabi.oliv16@gmail.com");
        cy.get("#requests").type("Vegan");
        cy.get("#signature").type(firstName + ' ' + lastName);
    });

    it("select two tickets", () => {    
        cy.get("#ticket-quantity").select("2");
    });

    it("select 'vip' ticket type", () => {
        cy.get("#vip").check(); 
    });
    
    it("selects 'social media' checkbox", () => {
        cy.get("#social-media").check();
    });

    it("selects 'friend', and 'publication', then unchek 'friend'", () =>{
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#friend").uncheck();
    });

    it("has 'TICKETBOX` header's heading", () => {
        cy.get("header h1").should("contain", "TICKETBOX");
    });

    it("alerts on invalid email", () => {
        cy.get("#email")
          .as("email")
          .type("gabi.oliv16-gmail.com");
        
        cy.get("#email.invalid").should("exist"); 

        //cy.get("#email.invalid").as("invalidEmail").should("exist"); // Salva o elemento no momento que cria o alias e o teste não passa
        
        cy.get("@email")
          .clear()
          .type("gabi.oliv16@gmail.com");

        //cy.get("@invalidEmail").should("not.exist");}); 
        cy.get("#email.invalid").should("not.exist");
    })
    it.only("fills and reset the form", () => {
        const firstName = "Gabriela";
        const lastName = "Oliveira";
        const fullName = `${firstName} ${lastName}`;

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("gabi.oliv16@gmail.com");
        cy.get("#ticket-quantity").select("2");
        cy.get("#vip").check(); 
        cy.get("#friend").check();
        cy.get("#requests").type("More cheese");
        cy.get(".agreement p").should(
            "contain",
            `I, ${fullName}, wish to buy 2 VIP tickets.`
        );
        cy.get("#agree").click();
        cy.get("#signature").type(fullName);
        cy.get("button[type='submit']")
            .as("submitButton")
            .should("not.be.disabled");
        cy.get("button[type='reset']").click();
        cy.get("@submitButton").should("be.disabled");
        });
});