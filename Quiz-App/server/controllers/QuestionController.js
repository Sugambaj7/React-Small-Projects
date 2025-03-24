const Questions = require("../models/QuestionModel.js");
const Results = require("../models/ResultModel.js");
const { questions, answers } = require("../utils/data.js");

class QuestionController {
  async getQuestions(req, res) {
    try {
      const data = await Questions.find();
      res.json(data);
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  }

  async insertQuestions(req, res) {
    try {
      Questions.insertMany({ questions: questions, answers: answers });

      res.json({ msg: "Questions inserted successfully" });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async dropQuestions(req, res) {
    try {
      await Questions.deleteMany();
      res.json({ msg: "Questions deleted successfully" });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
}

module.exports = QuestionController;
