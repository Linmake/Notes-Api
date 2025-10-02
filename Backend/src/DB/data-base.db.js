import mongoose from "mongoose";

// Tu URI real de MongoDB
const url = "mongodb+srv://Linda:0w0fYN3TwsJ5gLFs@notesapp.kqq8wya.mongodb.net/?retryWrites=true&w=majority&appName=NotesApp";

// Variable global para cachear la conexión entre invocaciones de Lambda
let cachedConnection = null;

const connectDB = async () => {
  // 1️⃣ Reusar conexión si ya está activa
  if (cachedConnection && mongoose.connection.readyState === 1) {
    console.log("✅ Usando conexión existente a MongoDB (Lambda warm start)");
    return cachedConnection;
  }

  try {
    // 2️⃣ Si hay conexión en mal estado, cerrarla
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
      console.log("🔄 Cerrando conexión existente en mal estado");
    }
 
    // 3️⃣ Crear nueva conexión
    console.log("🔗 Estableciendo nueva conexión a MongoDB (Lambda cold start)");
    const connection = await mongoose.connect(url, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 2,
    });

    console.log("✅ Conectado a MongoDB exitosamente");

    // 4️⃣ Cachear conexión
    cachedConnection = connection;
    return connection;

  } catch (err) {
    console.error("❌ Error crítico conectando a MongoDB", err);
    throw err;
  }
};

export default connectDB;
