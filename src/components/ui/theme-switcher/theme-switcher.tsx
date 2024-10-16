'use client';

import React, {useEffect} from 'react';
import classNames from "classnames";
import {useAppDispatch, useAppSelector} from "@/src/hooks/reduxHooks";
import {setTheme} from "@/src/store/slices/themeSlice";

const ThemeSwitcher = () => {
    const theme = useAppSelector(themeSlice => themeSlice.theme.theme);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light-theme' | 'dark-theme';
        if (savedTheme) {
            dispatch(setTheme(savedTheme));
        } else {
            const selectedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme';
            dispatch(setTheme(selectedTheme));
        }
    }, [dispatch]);

    useEffect(() => {
        const oppositeTheme = theme === 'dark-theme' ? 'light-theme' : 'dark-theme';
        localStorage.setItem('theme', theme);
        document.documentElement.classList.remove(oppositeTheme);
        document.documentElement.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        dispatch(setTheme(theme === 'dark-theme' ? 'light-theme' : 'dark-theme'));
    };

    return (
        <button onClick={toggleTheme}
                className={classNames('w-16 h-8 rounded-2xl client-transition bg-gray-200 pl-1 pr-1 flex items-center',
                    {'bg-gray-600': theme === 'dark-theme'})}
        >
            <div
                className={classNames('h-6 w-6 bg-accent rounded-2xl client-transition',
                    {'ml-auto mr-0': theme === 'dark-theme'})}
            />
        </button>
    );
};

export default ThemeSwitcher;