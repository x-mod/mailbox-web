import * as React from "react";
import { createRoot } from 'react-dom/client';
import { Mailbox } from "mailbox-typescript-client";
import { createTheme,
         MantineProvider } from '@mantine/core';
import "@mantine/core/styles.css";

const theme = createTheme({
  /** Put your mantine theme override here */
  autoContrast: true,
  luminanceThreshold: 0.32,
});

import App from "./app";


Mailbox.baseURL = "http://localhost:8080";
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
    <MantineProvider theme={theme} >
        <App />
    </MantineProvider>
);
