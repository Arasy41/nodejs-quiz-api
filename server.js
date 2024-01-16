const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const quizRoute = require("./router/quiz.route");
const jobsheetRoute = require("./router/jobsheet.route");
const ngrok = require("@ngrok/ngrok");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.send("Hello World");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("Congrats you have created an ngrok web server");
});

app.use("/api/quizzes", quizRoute);
app.use("/api/jobsheet", jobsheetRoute);

app.listen(port, () =>
  console.log(`App Listening on port http://localhost:${port}`)
);
