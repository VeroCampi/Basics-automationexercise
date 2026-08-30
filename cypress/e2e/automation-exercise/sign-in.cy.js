const apiUrl = Cypress.expose("BASE_URL");

describe("Sign in and buy dress", () => {
  it("Sign In and Buy", () => {
    cy.visit(apiUrl);
    cy.contains(" Signup / Login").click();
    cy.contains("Login to your account").should("be.visible");
    cy.task("getSecret", "EMAIL").then((email) => {
      cy.get('input[data-qa="login-email"]').type(email);
    });
    cy.task("getSecret", "PASSWORD").then((password) => {
      cy.get('input[data-qa="login-password"]').type(password);
    });

    cy.get('button[data-qa="login-button"]').contains("Login").click();
    cy.get('a[href="/products"]')
      .contains(" Products")
      .should("be.visible")
      .click();
    cy.get('a[href="#Women"]').contains("Women").click();
    cy.get('a[href="/category_products/1"]')
      .contains("Dress ")
      .should("be.visible")
      .click();
    cy.get('a[href="/product_details/38"]').contains("View Product").click();
    cy.url().should("include", "product_details/38");
    cy.get("button").contains("Add to cart").should("be.enabled").click();
    cy.get('p > a[href="/view_cart"]').contains("View Cart").click();
    cy.contains("Proceed To Checkout").click();
    cy.get('a[href="/payment"]').contains("Place Order").click();
    cy.get("h2").contains("Payment").should("be.visible");
    cy.get("label").contains("Name on Card").should("be.visible");
    cy.get('name[data-qa="name-on-card"]').type("Random Guy");
    cy.get("label").contains("Card Number").should("be.visible");
    cy.get('input[data-qa="card-number"]').type("4242424242424242");
    cy.get("label").contains("CVC").should("be.visible");
    cy.get('input[data-qa="cvc"]').type("234");
    cy.get("label").contains("Expiration").should("be.visible");
    cy.get('input[data-qa="expiry-month"]').type("12");
    cy.get('input[data-qa="expiry-year"]').type("2030");
    cy.get('button[data-qa="pay-button"]')
      .contains("Pay and Confirm Order")
      .click();
  });
});
