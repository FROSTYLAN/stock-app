const express = require("express");

// Call environment variables
require("dotenv").config({ path: "./config.env" });

const app = express();

app.get("/", (req, res) => {
  console.log("Request received");

  res.status(200).send("<h1>Hello World!</h1>");
});

//spin up server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
