import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoMemoryServer } from 'mongodb-memory-server';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import authRoutes from './routes/authRoutes.js';
import enquiryRoutes from './routes/enquiryRoutes.js';
import quotationRoutes from './routes/quotationRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import { errorMiddleware } from './middleware/errorMiddleware.js';
import { seedAdmin } from './utils/seedAdmin.js';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDirectory = path.join(projectRoot, 'dist');

dotenv.config({ path: path.join(projectRoot, 'backend', '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok', message: 'JB & SONS POWER SOLUTIONS API is running' });
});

app.use('/api/auth', authRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/quotations', quotationRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/reviews', reviewRoutes);

app.use(express.static(distDirectory));
app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.startsWith('/api/')) {
    return next();
  }

  res.sendFile(path.join(distDirectory, 'index.html'), (error) => {
    if (error) next(error);
  });
});

app.use(errorMiddleware);

const startServer = async () => {
  let memoryServer;

  try {
    const configuredUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jbsons';

    try {
      await mongoose.connect(configuredUri);
      console.log(`Connected to MongoDB at ${configuredUri}`);
    } catch (connectionError) {
      console.warn('Primary MongoDB connection failed. Falling back to in-memory MongoDB.');
      memoryServer = await MongoMemoryServer.create();
      await mongoose.connect(memoryServer.getUri());
      console.log(`Connected to in-memory MongoDB at ${memoryServer.getUri()}`);
    }

    await seedAdmin();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error.message);
    process.exit(1);
  }
};

startServer();
