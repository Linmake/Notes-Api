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

// Configuración de variables de entorno
dotenv.config();

// Validar variables críticas
const requiredEnvVars = ['DB_URL', 'JWT_PRIVATE_KEY', 'GOOGLE_API_KEY'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('❌ Variables de entorno faltantes:', missingVars);
  process.exit(1);
}

console.log("✅ Todas las variables de entorno están configuradas");
console.log("🔍 NODE_ENV:", process.env.NODE_ENV);

// Crear la app Express
const App = express();

// Conectar a la base de datos
connectDB();

// Middlewares
App.use(cookieParser());
App.use(express.json());

// CORS para producción
App.use(cors({
  origin: function (origin, callback) {
    // En producción, permite tu frontend y localhost para desarrollo
    const allowedOrigins = [
      'http://localhost:3000',
      'https://tu-frontend.vercel.app', // ← tu dominio de producción
      'https://tu-frontend.onrender.com' // ← o donde esté tu front
    ];
    
    // Permitir todos los orígenes temporalmente para pruebas
    if (process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  },
  credentials: true,
}));

// Rutas
//App.use("/file", FileRouter);
App.use("/folder", FolderRouter);
//App.use("/project", ProjectRouter);
//App.use("/account", AccountRouter);
//App.use("/assistant", AssitantRouter);

// Ruta de salud
App.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    message: "Servidor funcionando correctamente",
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// Ruta raíz
App.get("/", (req, res) => {
  res.json({ 
    message: "Backend Lumia Pina Notes API",
    version: "1.0.0",
    status: "active"
  });
});

// Manejo de rutas no encontradas
App.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Manejo de errores
App.use((error, req, res, next) => {
  console.error("Error del servidor:", error);
  res.status(500).json({ 
    error: "Error interno del servidor",
    message: process.env.NODE_ENV === 'production' ? 'Contacta al administrador' : error.message 
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
App.listen(PORT, () => {
  console.log(`🚀 Servidor público ejecutándose en puerto ${PORT}`);
  console.log(`📍 Ambiente: ${process.env.NODE_ENV}`);
  console.log(`🌐 URL: http://localhost:${PORT}`);
});

export default App;