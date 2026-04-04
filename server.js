const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// البحث
app.get("/search", (req, res) => {
  const query = req.query.q || "منتج";

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
  console.log("Server running...");
});
