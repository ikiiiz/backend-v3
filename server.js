app.get("/search", (req, res) => {
  const q = req.query.q?.toLowerCase() || "";

  const products = [
    {
      name: "ايفون 13",
      price: 3000,
      store: "Amazon",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "سماعة بلوتوث",
      price: 150,
      store: "Noon",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "لابتوب ديل",
      price: 4000,
      store: "Jarir",
      image: "https://via.placeholder.com/150"
    }
  ];

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(q)
  );

  res.json(filtered);
});
