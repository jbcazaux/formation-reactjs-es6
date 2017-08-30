import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import addLoggerBehaviour from "./logger";

const HelloLogger = addLoggerBehaviour(Hello);

ReactDOM.render(
    <HelloLogger name="cnrs"/>,
    document.getElementById('root')
);
