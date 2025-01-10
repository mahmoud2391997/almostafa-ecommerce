import React, { useState } from 'react';

const LanguageDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const setLanguage = (language: string) => {
        setSelectedLanguage(language === 'en' ? 'English' : 'العربية');
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left mt-2 md:mt-0">
            <button
                onClick={toggleDropdown}
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
                {selectedLanguage}
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
                    <div className="py-1">
                        <a
                            href="#"
                            onClick={() => setLanguage('en')}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            English
                        </a>
                        <a
                            href="#"
                            onClick={() => setLanguage('ar')}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            العربية
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageDropdown;
