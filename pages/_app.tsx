import { AppProps } from 'next/app';
import Header from "@/src/components/header/header";
import React from "react";
import "@/src/styles/global.css"
import ScrollDownButton from "@/src/components/ui/scroll-down-button/scroll-down-button";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="app-container">
            <div className="header-container">
                <Header/>
            </div>
            <div className="content-container">
                <Component {...pageProps} />
            </div>
            <div className="fixed bottom-8 right-8">
                <ScrollDownButton/>
            </div>
        </div>
    );
}

export default MyApp;