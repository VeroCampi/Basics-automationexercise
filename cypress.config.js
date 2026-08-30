const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    expose: {
      BASE_URL: "https://automationexercise.com",
    },

    setupNodeEvents(on, config) {
      // Registrar un task para obtener valores sensibles bajo demanda
      on("task", {
        getSecret(key) {
          // Lee directamente de las variables de entorno de Node.js
          return process.env[key] || null;
        },
      });

      return config;
    },
  },
});
