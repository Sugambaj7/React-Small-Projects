const Result = require("../models/ResultModel");

class ResultController {
  async getResults(req, res) {
    try {
      const data = await Result.find();
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  }

  async insertResult(req, res) {
    try {
      const {
        username,
        userGivenAnswers,
        attemptedQuestions,
        totalPoints,
        remarks,
      } = req.body;
      if (!username && !userGivenAnswers) throw new Error("Data not provided");

      await Result.create({
        username,
        userGivenAnswers,
        attemptedQuestions,
        totalPoints,
        remarks,
      });

      res.json({ msg: " Result inserted successfully" });
    } catch (err) {
      res.json(err);
    }
  }

  async dropResult(req, res) {
    try {
      await Result.deleteMany();
      res.json({ msg: "Results deleted successfully" });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = ResultController;
