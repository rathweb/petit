import mongoose from "mongoose";

const connection = {};

async function connectDb() {
  try {
    if (connection.isConnected) {
      console.log("Already connected to the database.");
      return;
    }
    if (mongoose.connections.length > 0) {
      connection.isConnected = mongoose.connections[0].readyState;
      if (connection.isConnected === 1) {
        console.log("Use previous connection to the database.");
        return;
      }
      await mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.MONGODB_URL, {
      
      useUnifiedTopology: true,
    });
    console.log("New connection to the database.");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

async function disconnectDb() {
  try {
    if (connection.isConnected) {
      if (process.env.NODE_ENV === "production") {
        await mongoose.disconnect();
        connection.isConnected = false;
        console.log("Disconnected from the database.");
      } else {
        console.log("Not disconnecting from the database in non-production environment.");
      }
    }
  } catch (error) {
    console.error("Error disconnecting from the database:", error);
  }
}

const db = { connectDb, disconnectDb };
export default db;
