import React from 'react';
import ThemeSwitcher from "@/src/components/ui/theme-switcher/theme-switcher";

const Header = () => {
    return (
        <div className="w-full h-full flex-center">
            <span className="font-bold text-2xl">Test Blog App</span>
            <ThemeSwitcher/>
        </div>
    );
};

export default Header;