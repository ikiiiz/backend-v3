const express = require("express");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// 🔹 API رئيسي
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// 🔹 بحث
app.get("/search", (req, res) => {
  const query = req.query.q;

  // بيانات تجريبية (بدلها لاحقاً من مواقع حقيقية)
  const products = [
    {
      name: "مكنسة كهربائية",
      price: 300,
      store: "Amazon",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "مكنسة كهربائية",
      price: 250,
      store: "Noon",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "مكنسة كهربائية",
      price: 270,
      store: "AliExpress",
      image: "https://via.placeholder.com/150"
    }
  ];

  // فلترة بسيطة
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  res.json(filtered);
});

// 🔥 أهم جزء (PORT)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
