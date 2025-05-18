const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let tasks = [];
let nextId = 1;

// GET /tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks
app.post('/api/tasks', (req, res) => {
  const { title, completed = false } = req.body;
  const task = { id: nextId++, title, completed };
  tasks.push(task);
  res.status(201).json(task);
});

app.listen(PORT, () => {
  console.log(`TaAi API is running on http://localhost:${PORT}/api`);
});
// GET /api/ttbs/products
app.get('/api/ttbs/products', (req, res) => {
  const products = [
    {
      name: "Smart Internet",
      description: "Secure, high-speed internet with real-time monitoring and auto failover."
    },
    {
      name: "SIP Trunking",
      description: "Cloud-ready voice service delivered over IP."
    },
    {
      name: "Smartflo",
      description: "Cloud-based communication suite for remote and hybrid teams."
    },
    {
      name: "SD-WAN",
      description: "Next-gen network solution for branch connectivity and optimization."
    },
    {
      name: "IoT Solutions",
      description: "Connected device platform for asset tracking, smart metering, and more."
    }
  ];
  res.json(products);
});
