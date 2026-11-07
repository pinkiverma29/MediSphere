const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error(
        "MONGO_URI is not defined in the .env file"
      );
    }

    const conn = await mongoose.connect(mongoUri);

    console.log(
      `MongoDB Atlas Connected: ${conn.connection.host}`
    );

  } catch (error) {

    console.error(
      `MongoDB Connection Error: ${error.message}`
    );

    console.warn("MongoDB is unavailable. Prediction/alert APIs will use their safe in-memory fallback where supported.");
  }
};

module.exports = connectDB;