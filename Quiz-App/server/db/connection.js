const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("colors");
dotenv.config();

const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(process.env.MONGO_URI);
    console.log(`Database connected to ${conn.connection.host}`.cyan.underline);
    return true;
  } catch (error) {
    console.error("Database connection failed", error.message);
    throw error;
  }
};

module.exports = connect;
