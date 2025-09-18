
// === DIAGNÓSTICO INICIAL - DEBE IR PRIMERO === //
console.log('🔍 LAMBDA INICIADA - Diagnóstico');
console.log('Tiempo:', new Date().toISOString());
console.log('DB_URL exists:', !!process.env.DB_URL);
console.log('DB_URL value:', process.env.DB_URL ? '***REDACTED***' : 'UNDEFINED');
console.log('NODE_ENV:', process.env.NODE_ENV);

// Test de módulos críticos
try {
    // Test de importación dinámica
    const express = await import('express');
    console.log('✅ Express module found');
} catch (e) {
    console.log('❌ Express module MISSING:', e.message);
}

try {
    const mongoose = await import('mongoose');
    console.log('✅ Mongoose module found');
} catch (e) {
    console.log('❌ Mongoose module MISSING:', e.message);
}

try {
    const serverlessHttp = await import('serverless-http');
    console.log('✅ Serverless-http module found');
} catch (e) {
    console.log('❌ Serverless-http module MISSING:', e.message);
}
// === FIN DIAGNÓSTICO === //

import express from "express";
import connectDB from "./DB/data-base.db.js";
import dotenv from "dotenv";
import cors from 'cors';
import FileRouter from "./Routes/file.routes.js";
import FolderRouter from "./Routes/folder.routes.js";
import ProjectRouter from "./Routes/project.routes.js";
import AccountRouter from "./Routes/account.routes.js";
import AssitantRouter from "./Routes/assistant.routes.js";
import cookieParser from "cookie-parser";
import serverless from "serverless-http";

// Configuración
dotenv.config();

// Crear la app Express
const App = express();

// Conectar a la base de datos
// IMPORTANTE: En Lambda, las conexiones a DB deben manejarse con cuidado
// porque Lambda reutiliza el entorno (conexiones persistentes)
connectDB();

// Middlewares
App.use(cookieParser());
App.use(express.json());

const allowedOrigins = [
  'http://localhost:4000',
  // Aquí debes agregar también tu dominio de producción frontend
  // ej: 'https://mi-app-frontend.vercel.app'
];

App.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Rutas
App.use("/file", FileRouter);
App.use("/folder", FolderRouter);
App.use("/project", ProjectRouter);
App.use("/account", AccountRouter);
App.use("/assistant", AssitantRouter);

// Manejo de rutas no encontradas (importante para Lambda)
App.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Exportar el handler para Lambda
export const handler = serverless(App);

// Opcional: exportar para pruebas locales
export default App;