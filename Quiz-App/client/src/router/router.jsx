import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../components/MainComponent";
import QuizComponent from "../components/QuizComponent";
import ResultComponent from "../components/ResultComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent />,
  },
  {
    path: "/quiz",
    element: <QuizComponent />,
  },
  {
    path: "/result",
    element: <ResultComponent />,
  },
]);

export default router;
