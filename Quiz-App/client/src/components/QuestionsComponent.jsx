import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//custom hook
import { useFetchQuestion } from "../hooks/FetchQuestion";
import { UpdateAnswer } from "../hooks/setResult";

const QuestionsComponent = ({ onChecked }) => {
  const [checkedQuestion, setCheckedQuestion] = useState(undefined);
  const { trace } = useSelector((state) => state.question);
  const { result } = useSelector((state) => state.result);
  console.log(result, "k xa result ma");
  //use state hook from getch question bata aako data
  const dispatch = useDispatch();
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  // const question = data[0];
  const question = useSelector(
    (state) => state.question.queue[state.question.trace]
  );

  useEffect(() => {
    dispatch(UpdateAnswer({ trace, checked: checkedQuestion }));
  }, [checkedQuestion]);

  function onSelect(index) {
    onChecked(index);
    setCheckedQuestion(index);
    dispatch(UpdateAnswer({ trace, checked: checkedQuestion }));
  }
  if (isLoading) return <h3 className="text-light">Loading....</h3>;
  if (serverError) return <h3 className="text-light">Unknown Server Error</h3>;

  return (
    <div className="questions">
      <h2 className="text-light">{question?.question}</h2>
      <ul key={question?.id}>
        {question?.options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              value={true}
              name="options"
              id={`q${index + 1}-option`}
              onChange={() => onSelect(index)}
            />

            <label className="text-primary" htmlFor={`q${index + 1}-option`}>
              {option}
            </label>
            {console.log(index, "k xa index ma")}
            <div
              className={`check ${checkedQuestion === index ? "checked" : ""}`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsComponent;
