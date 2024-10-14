import React from 'react';
import ThemeSwitcher from "@/src/components/ui/theme-switcher/theme-switcher";

const Header = () => {
    return (
        <div className="w-full -mx-4 h-full flex-center relative">
            <span className="font-bold text-2xl">Test Blog App</span>
            <div className="h-full w-24 flex-center absolute right-0 top-0">
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

export default Header;