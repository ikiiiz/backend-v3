const express = require("express");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// search route
app.get("/search", (req, res) => {
  const query = req.query.q;

  const products = [
    {
      name: query,
      price: 100,
      store: "Amazon",
      image: "https://via.placeholder.com/150"
    }
  ];

  res.json(products);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
