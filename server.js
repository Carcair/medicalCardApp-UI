const express = require("express");
const path = require("path");
const http = require("http");
const proxy = require("express-http-proxy");
const cors = require("cors");
const history = require("connect-history-api-fallback");

const app = express();

app.use(express.json());
app.use(cors());
// Load static files
app.use(express.static(path.join(__dirname, "dist/medicalCardApp-UI")));

// Enables HTML5 History API
app.use(history());

// Redirecting to proxy server
app.use("/server", proxy("http://localhost:8080"));

// Load main application file
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/medicalCardApp-UI/index.html"));
});

const port = "4200";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on ${port}`));
