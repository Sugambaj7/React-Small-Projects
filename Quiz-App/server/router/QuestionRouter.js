const express = require("express");
const QuestionController = require("../controllers/QuestionController");

const questionRouter = express.Router();
const QuestionInstance = new QuestionController();

questionRouter
  .route("/")
  .get(QuestionInstance.getQuestions)
  .post(QuestionInstance.insertQuestions)
  .delete(QuestionInstance.dropQuestions);

module.exports = questionRouter;
