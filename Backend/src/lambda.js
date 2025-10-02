import express from "express";
import connectDB from "./DB/data-base.db.js";
import cors from 'cors';
import cookieParser from "cookie-parser";
import serverless from "serverless-http";
import FileRouter from "./Routes/file.routes.js";
import FolderRouter from "./Routes/folder.routes.js";
import ProjectRouter from "./Routes/project.routes.js";
import AccountRouter from "./Routes/account.routes.js";
import AssitantRouter from "./Routes/assistant.routes.js";
const App = express();
connectDB();
App.use(cookieParser());
App.use(express.json()); 
const allowedOrigins = [
  'http://localhost:3000',
  'https://lumiapina.com',
  'https://backend-lumiapina-production.up.railway.app/'
];

App.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: true
}));

// Rutas
App.use("/file", FileRouter);
App.use("/folder", FolderRouter);
App.use("/project", ProjectRouter);
App.use("/account", AccountRouter);
App.use("/assistant", AssitantRouter);

// Rutas no encontradas
App.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Exportar para Lambda
export const handler = serverless(App);
export default App;
