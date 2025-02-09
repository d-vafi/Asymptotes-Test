// cypress/integration/mapComponent.spec.js
describe("MapComponent", () => {
    it("The Google Maps API is loaded", () => {
      // Visit a campus route so that MapComponent is rendered.
      cy.visit("http://localhost:5173/SGWcampus", {
        onBeforeLoad(win) {
          // Force authenticated state for testing.
          win.__forceAuth = true;
        }
      });
      // The map component should exist (we assume your MapComponent now renders a data-testid="map")
      cy.get('[data-testid="map"]').should("exist");
      // Check if the Google Maps API is loaded
      cy.window().should("have.property", "google");
    });
  });