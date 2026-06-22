import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {
      family: 4,
    });
    connection.isConnected = db.connections[0].readyState; //readyState gives number
    console.log("database connected successfully");
  } catch (err) {
    console.log("Database connection failed : ", err);
    process.exit(1); //restart the server
  }
}

export default dbConnect;
