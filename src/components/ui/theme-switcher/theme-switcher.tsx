'use client';

import React, {useEffect, useState} from 'react';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<'light-theme' | 'dark-theme'>('light-theme');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light-theme' | 'dark-theme';
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const selectedTheme = window.matchMedia('(prefers-color-scheme: dark-theme)').matches ? 'dark-theme' : 'light-theme';
            setTheme(selectedTheme);
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark-theme' ? 'light-theme' : 'dark-theme';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.remove(theme!);
        document.documentElement.classList.add(newTheme);
    };

    return (
        <button onClick={toggleTheme} className="p-2 bg-gray-200 dark:bg-gray-800 rounded">
            {theme === 'dark-theme' ? 'Светлая тема' : 'Тёмная тема'}
        </button>
    );
};

export default ThemeSwitcher;