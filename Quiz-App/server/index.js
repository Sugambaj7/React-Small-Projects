const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config();

const app = express();

//app middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//app port
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  try {
    res.json("server loaded");
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server connected to : http://localhost:${PORT}`);
});
