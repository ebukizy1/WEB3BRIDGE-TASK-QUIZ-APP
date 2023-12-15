import React, { useState } from "react";
import "../quiz/quiz.css";

export const Quiz = () => {
    let [index, setIndex]= useState(0);
    let [question, setQuestion]= useState( )

  return (
    <div className="container">
      <h1>QUIZ WEB3BRIDGE APP</h1>
      <hr />
      <h2>What is the primary purpose of blockchain technology?</h2>
      <ul>
        <li>A Decentralization</li>
        <li>B Centralization</li>
        <li>C Randomization</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 question</div>
    </div>
  );
};
