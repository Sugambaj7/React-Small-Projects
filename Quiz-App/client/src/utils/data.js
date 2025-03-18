const questions = [
  {
    id: 1,
    question: "What is the primary purpose of React.js?",
    options: [
      " To create databases",
      " To build user interfaces",
      "To manage backend operations",
      "To style web pages",
    ],
  },
  {
    id: 2,
    question:
      "Which of the following is used to pass data from a parent component to a child component in React?",
    options: ["Refs", "State", "Props", "PropTypes"],
  },
  {
    id: 3,
    question:
      " What is the correct syntax to create a functional component in React?",
    options: [
      "function MyComponent() { return <h1>Hello</h1>; }",
      "const MyComponent = () => <h1>Hello</h1>;",
      "Both a and b",
      "None of the above",
    ],
  },
  {
    id: 4,
    question: "What is the purpose of the useState hook in React?",
    options: [
      "To fetch API data",
      "To manage component state",
      "To define global variables",
      " To create CSS styles",
    ],
  },
  {
    id: 5,
    question:
      "What is the correct way to update state using the useState hook?",
    options: [
      "setState(newValue);",
      "state = newValue",
      "this.setState(newValue);",
      "useState(newValue);",
    ],
  },
  {
    id: 6,
    question:
      " Which of the following is a correct way to declare a JavaScript variable?",
    options: [
      "var x = 10;",
      "let x = 10;",
      "const x = 10;",
      "All of the above",
    ],
  },
  {
    id: 7,
    question:
      "What will be the output of console.log(typeof NaN); in JavaScript?",
    options: ["number", "undefined", "NaN", "string"],
  },
  {
    id: 8,
    question: "What does the map() function do in JavaScript?",
    options: [
      "Loops through an array and returns a new array",
      "Modifies the original array",
      "Filters elements in an array",
      "Sorts an array in ascending order",
    ],
  },
  {
    id: 9,
    question: "What is the difference between == and === in JavaScript?",
    options: [
      " == compares values only, while === compares both values and types",
      "=== is used for assignment, while == is used for comparison",
      "== is stricter than ===",
      "There is no difference",
    ],
  },
  {
    id: 10,
    question: "What will console.log(0.1 + 0.2 === 0.3); return in JavaScript?",
    options: ["true", "false", "undefined", "TypeError"],
  },
];

export default questions;
