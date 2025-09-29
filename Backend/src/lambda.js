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

console.log("🔍 Variables de entorno:");
console.log("DB_URL:", process.env.DB_URL);
console.log("NODE_ENV:", process.env.NODE_ENV);

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
  'http://localhost:3000',
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