import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Audio routes
  app.get('/api/audio/background', (req, res) => {
    res.redirect('https://cdn1.genspark.ai/user-upload-image/3/d28f08ad-9f79-4a9d-8336-ad91255c813d.mp3');
  });

  app.get('/api/audio/intro', (req, res) => {
    res.redirect('https://cdn1.genspark.ai/user-upload-image/1/728504f7-961c-4ee7-b171-290128ea5b96.mp3');
  });

  const httpServer = createServer(app);

  return httpServer;
}
