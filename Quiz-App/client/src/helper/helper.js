export function attempts_NumberOfQuestion(result) {
  return result.filter((item) => item !== undefined).length;
}

export function earnedPoints_Number(result, answers, point) {
  console.log(result, "mero result");
  console.log(answers, "mero answers");
  return result
    .map((useranswer, index) => answers[index] === useranswer)
    .filter((index) => index)
    .map((index) => 10)
    .reduce((prev, current) => prev + current, 0);
}

export function flagResult(totalPoints, earnedPoints) {
  return (totalPoints / 2) < earnedPoints;
}
