export const REJECT_TEXT =
  "Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which maybe used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication.";

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

  it("should display rejection text after picking an answer which has isRejection property", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#quiz_button").click();
    cy.get("#first-answer").click();
    cy.get("#first-answer").click();
    cy.get("div.quiz-result p").should("contain.text", REJECT_TEXT)
  });
});
