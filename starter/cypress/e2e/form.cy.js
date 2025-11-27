describe("Form Functionality", () => {
    beforeEach(() => {
        // Visit the website and open card set page
        cy.viewport(1280, 720);
        cy.visit("http://localhost:1234/");
        cy.get("#cardSetPage").click();
    });

    it("Creating a new set successful response", () => {
        // Click on 'ADD NEW SET' button
        cy.get('[data-cy="toggle_form"]').click();

        // Make sure title input is visible and add a value to it and then submit
        cy.get("#titleInput").should("be.visible").type("title");
        cy.get('[type="submit"]').should("be.visible").click();

        // Make sure the new card set is now added and visible
        cy.get('[data-cy="5"]').should("be.visible");
    });

    it("Adding a new card successful response", () => {
        // Click on first card
        cy.get('[data-cy="1"]').click();

        // Click on 'ADD NEW CARD' button, fill the form and submit
        cy.get('[data-cy="toggle_form"]').click();
        cy.get("#termInput").should("be.visible").type("3");
        cy.get("#descriptionInput").should("be.visible").type("description");
        cy.get('[type="submit"]').should("be.visible").click();

        // Make sure the card was added
        cy.get(".term p").should("contain.text", "3");
        cy.get(".description p").should("contain.text", "description");
    });

    it("Creating a new set displays error for missing inputs", () => {
        // Click on 'ADD NEW SET' button
        cy.get('[data-cy="toggle_form"]').click();

        // Submit directly with empty set title
        cy.get('[type="submit"]').should("be.visible").click();

        // Make sure the error message is displayed
        cy.get(".error").should("contain.text", "TITLE CANNOT BE EMPTY");
    });

    it("Adding a new card displays error for missing inputs", () => {
        // Click on first card
        cy.get('[data-cy="1"]').click();

        // Click on 'ADD NEW CARD' button
        cy.get('[data-cy="toggle_form"]').click();

        // Fill the form with empty term and submit
        cy.get("#descriptionInput").should("be.visible").type("description");
        cy.get('[type="submit"]').should("be.visible").click();
        cy.get(".error").should("contain.text", "TERM CANNOT BE EMPTY");

        // Fill the form with empty description and submit
        cy.get("#termInput").should("be.visible").type("3");
        cy.get("#descriptionInput").clear();
        cy.get('[type="submit"]').click();
        cy.get(".error").should("contain.text", "DESCRIPTION CANNOT BE EMPTY");

        // Fill the form with empty term and description values and submit
        cy.get("#termInput").clear();
        cy.get("#descriptionInput").clear();
        cy.get('[type="submit"]').click();
        cy.get(".error").should(
            "contain.text",
            "TERM AND DESCRIPTION CANNOT BE EMPTY",
        );
    });
});
