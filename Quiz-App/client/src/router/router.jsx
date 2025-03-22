import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../components/MainComponent";
import QuizComponent from "../components/QuizComponent";
import ResultComponent from "../components/ResultComponent";
import { CheckUserExist } from "../helper/helper.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent />,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExist>
        <QuizComponent />
      </CheckUserExist>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUserExist>
        <ResultComponent />
      </CheckUserExist>
    ),
  },
]);

export default router;
