import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
    titles: string[];
}

const Navbar: React.FC<NavbarProps> = ({ titles }) => {
    const [currentTitle, setCurrentTitle] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const pathSegments = location.pathname.split('/');
        const currentRoute = pathSegments[pathSegments.length - 1];
        const matchingTitle = titles.find((title) => title.toLowerCase() === currentRoute);
        setCurrentTitle(matchingTitle || null);
    }, [location.pathname, titles]);

    const handleTitleClick = (title: string) => {
        setCurrentTitle(title);
        // You can add additional logic here for handling title clicks
    };
    const renderTitles = () => {
        return titles.map((title) => (
            <Link
                key={title}
                to={`/${title.toLowerCase()}`} // Assuming route paths are based on the title
                className="relative cursor-pointer px-4 py-2"
                onClick={() => handleTitleClick(title)}
            >
                {title}
                {currentTitle === title && (
                    <div className="absolute w-full h-1 bg-red-500 bottom-0 left-0 rounded-full transition-transform duration-300"></div>
                )}
            </Link>
        ));
    };

    return (
        <div className="flex items-center">
            <div className="flex flex-grow justify-center">{renderTitles()}</div>
        </div>
    );
};

export default Navbar;
