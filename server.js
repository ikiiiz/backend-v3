const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
windowMs: 15 * 60 * 1000,
max: 100
});

app.use(limiter);

app.get('/search', (req, res) => {
const query = req.query.q;

res.json({
results: [
{ name: "سماعة AirPods", price: "499 ريال" },
{ name: "سماعة Sony", price: "799 ريال" },
{ name: "سماعة Gaming", price: "299 ريال" }
],
search: query
});
});

app.listen(3000, () => {
console.log('Server running on http://localhost:3000');
});