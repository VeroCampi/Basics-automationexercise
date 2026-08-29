describe("Sign Up", () => {
  it("Complete the signUp workflow", () => {
    const serverId = Cy.env("SERVER_ID");
    const userName = faker.internet.username();
    const testEmail = userName + "@" + serverId + "mailosaur.net";
    const fakePassword = faker.internet.password();

    cy.visit(Cy.env('BASE_URL'));
    cy.contains(" Signup / Login").click();
    cy.url().should("include", "/login");
    cy.contains("New User Signup!").should("be.visible");
    cy.get('input[data-qa="signup-name"]').type(userName);
    cy.get('input[data-qa="signup-email"]').type(testEmail);
    cy.get('button[data-qa="signup-button"]').contains("Signup").click();
    cy.contains("Enter Account Information").should("be.visible");
    cy.get('input[value="Mrs"]').click();
    cy.get('input[data-qa="name"]').should("have.value", userName);
    cy.get('input[data-qa="email"]').should("have.value", testEmail);
    cy.get('input[data-qa="password"]').type(fakePassword);
    cy.get('select[data-qa="days"]')
      .should("be.visible")
      .select("5")
      .should("have.value", "5");
    cy.get('select[data-qa="months"]')
      .should("be.visible")
      .select("March")
      .should("have.value", "3");
    cy.get('select[data-qa="years"]')
      .should("be.visible")
      .select("1984")
      .should("have.value", "1984");
    cy.contains("Sign up for our newsletter!").should("be.visible");
    cy.get("#newsletter").should("be.visible").click().should("be.checked");
    cy.contains("Receive special offers from our partners!").should(
      "be.visible",
    );
    cy.get('input[name="optin"]')
      .should("be.visible")
      .click()
      .should("be.checked");
    cy.contains("Address Information").should("be.visible");
    cy.get('label[for="first_name"]').should("be.visible");
    cy.get('input[data-qa="first_name"]').type("username");
    cy.get('label[for="last_name"]').should("be.visible");
    cy.get('input[data-qa="last_name"]').type("Lastname");
    cy.get('label[for="company"]').should("be.visible");
    cy.get('input[data-qa="company"]').type("ABCompany");
    cy.get('label[for="address1"]').should("be.visible");
    cy.get('input[data-qa="address"]').type("Street 12");
    cy.contains("(Street address, P.O. Box, Company name, etc.)").should(
      "be.visible",
    );
    cy.get('label[for="address2"]').should("be.visible");
    cy.get('input[data-qa="address2"]').type("Street 54");
    cy.get('label[for="country"]').should("be.visible");
    cy.get('select[data-qa="country"]')
      .should("be.visible")
      .select("United States")
      .should("have.value", "United States");
    cy.get('label[for="state"]').should("be.visible");
    cy.get('input[data-qa="state"]').type("California");
    cy.get('label[for="city"]').should("be.visible");
    cy.get('input[data-qa="city"]').type("Los Angeles");
    cy.get('p > label[for="city"]').contains("Zipcode ").should("be.visible");
    cy.get('input[data-qa="zipcode"]').type("00000");
    cy.get('label[for="mobile_number"]').should("be.visible");
    cy.get('input[data-qa="mobile_number"]').type("+1 000 000 0000");
    cy.get('button[data-qa="create-account"]')
      .contains("Create Account")
      .click();
    cy.contains("Account Created!").should("be.visible");
    cy.contains(
      "Congratulations! Your new account has been successfully created!",
    ).should("be.visible");
    cy.get('a[data-qa="continue-button"]').contains("Continue").click();
    cy.get('a[href="/logout"]')
      .contains(" Logout")
      .should("be.visible")
      .click();
  });
});
