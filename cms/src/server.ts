import express, { type Request, type Response } from 'express';
import payload from 'payload';
import dotenv from 'dotenv';
import config from './payload.config';

dotenv.config();

const app = express();

// Redirect root to admin
app.get('/', (_req: Request, res: Response) => {
  res.redirect('/admin');
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    config,
    express: app,
    secret: process.env.PAYLOAD_SECRET || 'your-secret-key-change-this',
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  const PORT = process.env.PAYLOAD_PORT || 3001;
  
  app.listen(PORT, () => {
    payload.logger.info(`Server listening on port ${PORT}`);
    payload.logger.info(`Admin panel: http://localhost:${PORT}/admin`);
  });
};

start();

