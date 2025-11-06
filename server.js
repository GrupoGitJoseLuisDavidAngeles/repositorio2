// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (index.html, script.js, etc.)
app.use(express.static(path.join(__dirname, ".")));

// Endpoint que devuelve un número aleatorio entre 1 y 10
app.get("/number", (req, res) => {
  const number = Math.floor(Math.random() * 10) + 1; // 1..10
  res.json({ number });
});

// Manejo básico de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Error interno del servidor" });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});