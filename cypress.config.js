const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', //app's development URL
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,  
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',                    
    retries: {
      runMode: 2,                     
      openMode: 0                     
    },
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
});
