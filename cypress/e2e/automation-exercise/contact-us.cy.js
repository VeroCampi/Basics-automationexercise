const apiUrl = Cypress.expose("BASE_URL");
describe("contact us", () => {
  it("contact us", () => {
    cy.visit(apiUrl);
    cy.get('a[href="/contact_us"]').contains(" Contact us").click();
    cy.get("h2").contains("Get In Touch").should("be.visible");
    cy.get('input[placeholder="Name"]').type("Name one");
    cy.get('input[data-qa="email"]').type("name@example.com");
    cy.get('input[data-qa="subject"]').type("consulta");
    cy.get('textarea[data-qa="message"]').type(
      "this is automated test message",
    );
    cy.get('input[value="Submit"]').click();
    cy.contains(
      "Success! Your details have been submitted successfully.",
    ).should("be.visible");
  });
});
