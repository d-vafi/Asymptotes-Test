// cypress/integration/bottomNavBar.spec.js
describe("Testing bottom navigation bar", () => {
    // Use a campus route (instead of the root auth route) so that BottomNavBar is rendered.
    const visitAuthPage = (path) => {
      cy.visit(`http://localhost:5173${path}`, {
        onBeforeLoad(win) {
          win.__forceAuth = true;
        }
      });
    };
  
    it("The bottom navigation bar should exist and be visible", () => {
      visitAuthPage("/SGWcampus");
      cy.get("div#bottomNavBar").should("exist").and("be.visible");
    });
  
    it("The bottom navigation bar should have 4 buttons", () => {
      visitAuthPage("/SGWcampus");
      cy.get("div#bottomNavBar").find("button").should("have.length", 4);
    });
  
    it("The map button of the navbar should display a menu at all paths", () => {
      // Test various routes that should render the BottomNavBar.
      const paths = ["/SGWcampus", "/directions", "/shuttle", "/schedule"];
      paths.forEach((path) => {
        visitAuthPage(path);
        cy.get("div#bottomNavBar").find("button").contains("Map").should("exist").click();
        cy.get("div#bottomNavBar").contains("SGW").should("exist");
        cy.get("div#bottomNavBar").contains("Loyola").should("exist");
      });
    });
  
    it("Map menu appropriately handles navigation", () => {
      cy.visit("http://localhost:5173/directions", {
        onBeforeLoad(win) {
          win.__forceAuth = true;
        },
      });
    
      // Ensure the "Map" button is visible and click it
      cy.get("div#bottomNavBar")
        .find("button")
        .contains("Map")
        .should("be.visible")
        .click();
    
      // Ensure the "SGW Campus" option exists and click it
      cy.get("#sgw-campus-option")
        .should("exist")
        .click();
    
      // Wait for navigation to complete
      cy.url().should("include", "/");
    
       });
    
    
    
    
  });