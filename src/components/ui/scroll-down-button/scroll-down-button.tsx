'use client';

import React from 'react';
import DownArrowIcon from "@/src/icons/down_arrow.icon";

const ScrollDownButton = () => {
    const scrollDown = () => {
        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
    };

    return (
        <div
            className="h-[50px] w-[50px] flex items-center justify-center cursor-pointer border-2 border-solid border-accent rounded-[50%]"
            onClick={scrollDown}
        >
            <DownArrowIcon/>
        </div>
    );
};

export default ScrollDownButton;