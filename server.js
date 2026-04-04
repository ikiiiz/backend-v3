const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.get("/search", (req, res) => {
  res.json([{ name: "test product" }]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running...");
});
