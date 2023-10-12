const { defineConfig } = require("cypress");

module.exports = defineConfig({
  edgeWebSecurity:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
