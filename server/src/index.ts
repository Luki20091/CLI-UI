import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Załaduj .env
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Przykładowy endpoint
app.get('/', (_req, res) => {
  res.send('Server działa!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});