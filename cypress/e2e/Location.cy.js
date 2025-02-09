describe("Location Tracking", () => {
    beforeEach(() => {
      cy.visit("/SGWcampus"); // Visit the correct page
    });
  
    it("should request location permission and show modal when accuracy is low", () => {
      cy.window().then((win) => {
        cy.stub(win.navigator.geolocation, "watchPosition").callsFake((success) => {
          success({
            coords: { latitude: 45.4949, longitude: -73.5779, accuracy: 50 }, // Bad accuracy
          });
        });
      });
  
      cy.contains("Are you on campus?").should("be.visible"); // Ensure modal appears
    });
  
    it("should hide the modal and update location when accuracy improves", () => {
      cy.window().then((win) => {
        cy.stub(win.navigator.geolocation, "watchPosition").callsFake((success) => {
          success({
            coords: { latitude: 45.4949, longitude: -73.5779, accuracy: 10 }, // Good accuracy
          });
        });
      });
  
      cy.contains("Are you on campus?").should("not.exist"); // Modal should not appear
    });
  
    it("should not display marker when user is outside buildings", () => {
      cy.window().then((win) => {
        cy.stub(win.navigator.geolocation, "watchPosition").callsFake((success) => {
          success({
            coords: { latitude: 45.5000, longitude: -73.5800, accuracy: 5 }, // Outside campus
          });
        });
      });
  
      cy.get('[data-testid="user-marker"]').should("not.exist");
    });
  });
  