class ResultController {
  getResults(req, res) {
    try {
      res.json("Results Loaded!!!");
    } catch (err) {
      res.json(err);
    }
  }

  insertResult(req, res) {
    try {
      res.json("Results inserted!!!");
    } catch (err) {
      res.json(err);
    }
  }

  dropResult(req, res) {
    try {
      res.json("Result deleted!!!");
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = ResultController;
