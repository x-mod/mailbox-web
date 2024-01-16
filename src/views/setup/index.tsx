import * as React from "react";
import { useEffect } from "react";

export function SetupView() {
    useEffect(() => {
        console.log("setup")
    })
    return (
        <div>
            <h1>MailBox WebMail --- SETUP </h1>
        </div>
    );
}