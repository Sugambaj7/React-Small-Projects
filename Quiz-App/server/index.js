const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router");

dotenv.config();

const app = express();

//app middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api", router);

//app port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server connected to : http://localhost:${PORT}`);
});
