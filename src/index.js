import React from "react";
import ReactDOM from "react-dom";
import ChatBot from "react-simple-chatbot";

const steps = [
  {
    id: "1",
    message: "What is your name?",
    trigger: "2"
  },
  {
    id: "2",
    user: true,
    trigger: "3"
  },
  {
    id: "3",
    message: "Hi {previousValue}, nice to meet you!",
    end: true
  }
];

function App() {
  return (
    <div className="App">
      <ChatBot steps={steps} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
