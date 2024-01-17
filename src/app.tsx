import * as React from "react";
import { useEffect, useState } from "react";
import { SetupView, SignInView } from "@/views";
import { Mailbox } from "mailbox-typescript-client";

export default function App() {
    const [existed, setExisted] = useState<boolean>(false);
    useEffect(() => {
        Mailbox.instance.accountExist().then((res) => {
            setExisted(res)
        }).catch((e) => {
            console.log("app initiallize failed =>", e)
        })
    })
    return (
        <>
            {
                existed ? <SignInView /> : <SetupView />
            }
        </>
    );
}