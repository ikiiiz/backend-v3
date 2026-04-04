app.get("/search", (req, res) => {
  const query = req.query.q;

  const products = [
    {
      name: query, // 👈 هنا التعديل
      price: 100,
      store: "Amazon",
      image: "https://via.placeholder.com/150"
    }
  ];

  res.json(products);
});
