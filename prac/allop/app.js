// app.js

const express = require('express');
const app = express();

// Addition
app.get('/add/:num1/:num2', (req, res) => {
  const { num1, num2 } = req.params;
  const result = parseFloat(num1) + parseFloat(num2);
  res.send(`Addition: ${result}`);
});

// Subtraction
app.get('/subtract/:num1/:num2', (req, res) => {
  const { num1, num2 } = req.params;
  const result = parseFloat(num1) - parseFloat(num2);
  res.send(`Subtraction: ${result}`);
});

// Multiplication
app.get('/multiply/:num1/:num2', (req, res) => {
  const { num1, num2 } = req.params;
  const result = parseFloat(num1) * parseFloat(num2);
  res.send(`Multiplication: ${result}`);
});

// Division
app.get('/divide/:num1/:num2', (req, res) => {
  const { num1, num2 } = req.params;
  const result = parseFloat(num1) / parseFloat(num2);
  res.send(`Division: ${result}`);
});

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
