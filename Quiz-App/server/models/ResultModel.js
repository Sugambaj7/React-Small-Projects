const mongoose = require("mongoose");
const { Schema } = mongoose;

//result model
const resultModel = new Schema({
  username: {
    type: String,
    required: true,
  },
  userGivenAnswers: {
    type: Array,
    default: [],
  },
  attemptedQuestions: {
    type: Number,
    default: 0,
  },
  totalPoints: {
    type: Number,
    default: 0,
  },
  remarks: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Result", resultModel);
