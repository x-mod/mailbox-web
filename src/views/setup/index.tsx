import * as React from "react";
import { useEffect, useState } from "react";
import {Hero, Settings} from "@/components";


export function SetupView() {
    useEffect(() => {
        document.title = "Setup MailBox";
    })
    return (
        <>
            <Hero />
            <Settings />         
        </>
    );
}