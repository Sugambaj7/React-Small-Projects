const express = require("express");
const QuestionController = require("../controllers/QuestionController");
const ResultController = require("../controllers/ResultController");

const resultRouter = require("./ResultRouter");
const questionRouter = require("./QuestionRouter");

const router = express.Router();

router.use("/questions", questionRouter);
router.use("/result", resultRouter);

module.exports = router;
