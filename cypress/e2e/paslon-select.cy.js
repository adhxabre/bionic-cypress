describe("Paslon Select", () => {
  it("can visit the page", () => {
    cy.visit("https://paslon-fe.adhxabre.my.id/");
  });

  it("can vote 'Junaedi'", () => {
    cy.visit("https://paslon-fe.adhxabre.my.id/");
    cy.wait(3000);
    cy.get("#name").type("John Doe");
    cy.wait(1000);
    cy.get("#Junaedi").click();
    cy.wait(1000);
    cy.get("#btn-submit").click();
    cy.wait(3000);
  });

  it("can vote 'Supardi'", () => {
    cy.visit("https://paslon-fe.adhxabre.my.id/");
    cy.wait(3000);
    cy.get("#name").type("John Doe");
    cy.wait(1000);
    cy.get("#Supardi").click();
    cy.wait(1000);
    cy.get("#btn-submit").click();
    cy.wait(3000);
  });

  it("can vote 'John'", () => {
    cy.visit("https://paslon-fe.adhxabre.my.id/");
    cy.wait(3000);
    cy.get("#name").type("John Doe");
    cy.wait(1000);
    cy.get("#John").click();
    cy.wait(1000);
    cy.get("#btn-submit").click();
    cy.wait(3000);
  });
});
