import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.DB_URL;

// Variable global para cachear la conexión entre invocaciones de Lambda
let cachedConnection = null;

const connectDB = async () => {
  // 1. Si ya tenemos una conexión cachada y ESTÁ CONECTADA, la reutilizamos
  if (cachedConnection && mongoose.connection.readyState === 1) {
    console.log("✅ Usando conexión existente a MongoDB (Lambda warm start)");
    return cachedConnection;
  }

  try {
    // 2. Si hay una conexión pero está en mal estado, la cerramos
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
      console.log("🔄 Cerrando conexión existente en mal estado");
    }
 
    // 3. Creamos una NUEVA conexión
    console.log("🔗 Estableciendo nueva conexión a MongoDB (Lambda cold start)");
    const connection = await mongoose.connect(url, {
      // Agrega estas opciones para mejor manejo en serverless
      serverSelectionTimeoutMS: 5000, // 5 segundos de timeout
      socketTimeoutMS: 45000, // 45 segundos de timeout
      serverSelectionTimeoutMS: 5000,    // Timeout más corto para serverless
      socketTimeoutMS: 45000,            // Timeout para operaciones
      maxPoolSize: 10,                   // Evita demasiadas conexiones
      minPoolSize: 2,
    });

    console.log("✅ Conectado a MongoDB exitosamente");

    // 4. Cacheamos la conexión para reusarla en futuras invocaciones
    cachedConnection = connection;
    return connection;

  } catch (err) {
    console.error("❌ Error crítico conectando a MongoDB", err);
    // En Lambda, es mejor lanzar el error para que se registre en CloudWatch
    throw err;
  }
};

export default connectDB;