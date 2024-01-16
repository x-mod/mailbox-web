import * as React from "react";
import { useEffect, useState } from "react";
import "./styles/main.scss";
import { SetupView, SignInView } from "@/views";
import { Mailbox } from "mailbox-typescript-client";

export default function App() {
    const [existed, setExisted] = useState<boolean>(false);
    useEffect(() => {
        Mailbox.instance.accountExist().then((res) => {
            setExisted(res)
        })
    })
    return (
        <>
            <h1>MailBox WebMail</h1>
            {
                existed ? <SignInView /> : <SetupView />
            }
        </>
    );
}