describe("Tickets", () => {
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));

    it("fills all the text input fields", () => {
        const firstName = "Gabriela"
        const lastName = "Oliveira"

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("gabriela.oliveira@venturus.org.br");
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

    it.only("selects 'friend', and 'publication', then unchek 'friend'", () =>{
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#friend").uncheck();
    });

    it("has 'TICKETBOX` header's heading", () => {});
});