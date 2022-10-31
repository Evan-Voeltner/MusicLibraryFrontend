describe("SearchBar Form Test", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-test="titleFilter"]').type("Teenagers");
    cy.get('[data-testid="filterSubmit btn"]').click();
    cy.get("tbody > :nth-child(1) > :nth-child(1)")
      .should("exist")
      .contains("Teenagers");
  });
});
