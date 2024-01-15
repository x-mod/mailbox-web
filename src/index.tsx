import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles/main.scss";

const name = "Hello!";    
const element = <h1>MailBox WebMail, {name}</h1>;

ReactDOM.render(element, document.getElementById("root"));