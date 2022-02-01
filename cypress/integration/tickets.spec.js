describe("Tickets", () => {
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));
    it.only("fills all the text input fields", () =>{
        const firstName = "Gabriela"
        const lastName = "Oliveira"
        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("gabriela.oliveira@venturus.org.br");
        cy.get("#requests").type("Vegan");
        cy.get("#signature").type(firstName+' '+lastName);
    });
    it ("has 'TICKETBOX` header's heading", () => {});
});