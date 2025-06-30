import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="relative">
      <GlobeAltIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
      <select
        onChange={handleLanguageChange}
        value={i18n.language}
        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spiritual-500"
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
