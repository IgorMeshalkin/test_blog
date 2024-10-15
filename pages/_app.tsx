import {AppProps} from 'next/app';
import Header from "@/src/components/header/header";
import React from "react";
import "@/src/styles/global.css"
import ScrollDownButton from "@/src/components/ui/scroll-down-button/scroll-down-button";
import {Provider} from "react-redux";
import store from "@/src/store";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default MyApp;