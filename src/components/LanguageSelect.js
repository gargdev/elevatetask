import React, { useState } from "react";

const LanguageSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // You can add additional logic here, such as changing the application language.
  };

  return (
    <div className="">
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="px-4 text-center py-2"
      >
        <option value="English" className="text-center text-2xl px-4 py-2">
          English
        </option>
        <option value="Spanish" className="text-center text-2xl px-4 py-2">
          Spanish
        </option>
      </select>
    </div>
  );
};

export default LanguageSelect;
