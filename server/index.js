// server/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRouter from './src/index.js';

// Load .env
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Mount API routes under /api
app.use('/api', apiRouter);

// Health check endpoint
app.get('/', (_req, res) => res.send('Server is running'));

const PORT = process.env.PORT || 5140;
app.listen(PORT, () => console.log(`🚀 Server listening on http://localhost:${PORT}`));
