const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router");

const connect = require("./db/connection");

dotenv.config();

const app = express();

//app middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api", router);

//app port
const PORT = process.env.PORT || 8080;

//start server only if valid connection

connect()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`Server connected to : http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log("Server connection failed");
    }
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  });
