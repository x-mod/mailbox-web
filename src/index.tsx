import * as React from "react";
import { createRoot } from 'react-dom/client';
import { Mailbox } from "mailbox-typescript-client";
import "./styles/main.scss";
import App from "./app";


Mailbox.baseURL = "http://localhost:8080";
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);
