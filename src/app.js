
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/docker_homework';

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="uk">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Docker + Express + MongoDB</title>
      </head>
      <body>
        <h1>Вітаємо! Сервер Express працює в Docker.</h1>
        <p>Практична робота ДЗ 68.1 виконана.</p>
        <p>Технології: Node.js, Express, Docker Compose та MongoDB.</p>
        <p>Перевірка бази: <a href="/health">/health</a></p>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  const connected = mongoose.connection.readyState === 1;

  res.status(connected ? 200 : 503).json({
    status: connected ? 'OK' : 'DATABASE_DISCONNECTED',
    server: 'Express',
    database: connected ? 'connected' : 'disconnected'
  });
});

async function startServer() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
}

startServer();
