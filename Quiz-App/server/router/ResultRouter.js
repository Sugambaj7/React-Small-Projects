const express = require("express");
const ResultController = require("../controllers/ResultController");

const resultRouter = express.Router();
const ResultInstance = new ResultController();

resultRouter
  .route("/")
  .get(ResultInstance.getResults)
  .post(ResultInstance.insertResult)
  .delete(ResultInstance.dropResult);

module.exports = resultRouter;
