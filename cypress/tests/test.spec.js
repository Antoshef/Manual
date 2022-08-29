describe("test quiz result", () => {
  it("should go through all quiz questions successfuly and return to Home Page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#quiz_button").click();
    cy.get("#first-answer").click();
    cy.get("#second-answer").click();
    cy.get("#second-answer").click();
    cy.get(".quiz-button").should("be.visible");
    cy.get("button.close-button").click();
    cy.get("#quiz_button").should("be.visible");
  });
});
