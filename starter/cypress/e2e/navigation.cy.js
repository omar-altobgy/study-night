describe("Navigation Tests", () => {
    beforeEach(() => {
        cy.viewport(1280, 720);
        cy.visit("http://localhost:1234/");
    });

    it("Clicking on 'CARD SET' loads the cards page successfully", () => {
        cy.get("#cardSetPage").click();
        cy.get('[data-cy="study-set-header"]').should("be.visible");

        // Check if all cards are visible
        for (let i = 1; i <= 4; i++) {
            cy.get(`[data-cy="${i}"]`).should("be.visible");
        }

        cy.get('[data-cy="toggle_form"]').should("be.visible");
    });

    it("Clicking on 'ABOUT' loads the about page successfully", () => {
        cy.get("#aboutPage").click();
        cy.get('[data-cy="about_page"]').should("be.visible");

        cy.get("h3")
            .should("be.visible")
            .should("have.text", "Flash Cards Anywhere Anytime");

        cy.get("p")
            .should("be.visible")
            .should("contain.text", "Whether you're studying at night")
            .should("contain.text", "and making learning more accessible.");

        cy.get("img").should("be.visible").should("have.attr", "alt");
    });

    it("Clicking on 'HOME' loads the home page successfully", () => {
        cy.get("#homePage").click();
        cy.get('[data-cy="home_header"]').should("be.visible");

        cy.get("h2")
            .should("be.visible")
            .should(
                "have.text",
                "A Digital Study Solution for the Modern World",
            );

        cy.get("img").should("be.visible").should("have.attr", "alt");
    });
});
