const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Quiz API",
    version: "1.0.0",
    description: "A simple Express Quiz API",
  },
  servers: [
    {
      url: `http://localhost:5000/api`,
      description: "Local server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./router/quiz.route.js", "./router/jobsheet.route.js"], // Include both route files
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Swagger docs available at http://localhost:5000/api-docs`);
}

module.exports = swaggerDocs;
