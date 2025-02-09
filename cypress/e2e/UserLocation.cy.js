describe("UserLocation E2E Test", () => {
    it("should fetch and display the user's location when geolocation is allowed", () => {
      cy.visit("http://localhost:5173/");
  
      
      cy.window().then((win) => {
        cy.stub(win.navigator.geolocation, "watchPosition").callsFake((success) => {
          success({
            coords: {
              latitude: 45.4971,
              longitude: -83.5787,
              accuracy: 10, // accurate data
            },
          });
        });
      });
  
      // location is displayed correctly
      cy.contains("Latitude: 45.4971, Longitude: -83.5787").should("exist");
  
      // no error message is shown
      cy.contains("Failed to get location").should("not.exist");
    });
  
    it("should show an error message when geolocation is denied", () => {
      cy.visit("http://localhost:5173/");
  
      // permission denied
      cy.window().then((win) => {
        cy.stub(win.navigator.geolocation, "watchPosition").callsFake((_, error) => {
          error({ code: 1, message: "User denied Geolocation" });
        });
      });
  
      // error message is displayed
      cy.contains("Failed to get location. Please allow access and try later.").should("exist");
  
      // no location is displayed
      cy.contains("Latitude:").should("not.exist");
      cy.contains("Longitude:").should("not.exist");
    });
  
    it("should show an error message when geolocation is not supported", () => {
      cy.visit("http://localhost:5173/");
  
      // geolocation not being supported
      cy.window().then((win) => {
        cy.stub(win.navigator, "geolocation").value(undefined); 
      });
  
      // error message is displayed
      cy.contains("Geolocation is not supported by your browser.").should("exist");
  
      // no location is displayed
      cy.contains("Latitude:").should("not.exist");
      cy.contains("Longitude:").should("not.exist");
    });
  
    it("should skip inaccurate location data", () => {
      cy.visit("http://localhost:5173/");
  
    
      cy.window().then((win) => {
        cy.stub(win.navigator.geolocation, "watchPosition").callsFake((success) => {
          success({
            coords: {
              latitude: 45.4971,
              longitude: -83.5787,
              accuracy: 100, // inaccurate data
            },
          });
        });
      });
  
      // no location is displayed (since accuracy > 50)
      cy.contains("Latitude:").should("not.exist");
      cy.contains("Longitude:").should("not.exist");
  
      // no error message is shown
      cy.contains("Failed to get location").should("not.exist");
    });
});