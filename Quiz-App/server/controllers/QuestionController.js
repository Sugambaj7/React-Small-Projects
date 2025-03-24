class QuestionController {
  async getQuestions(req, res) {
    try {
      res.json("Question Loaded!!!");
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async insertQuestions(req, res) {
    try {
      res.json("Post Question Loaded!!!");
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async dropQuestions(req, res) {
    try {
      res.json("Questions Deleted!!!");
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
}

module.exports = QuestionController;
