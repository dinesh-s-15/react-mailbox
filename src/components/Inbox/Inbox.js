import React, { useState, useEffect } from "react";
// import "../../App.css";
// import "../../dark-theme.css"
import EmailDetail from "../EmailDetail/EmailDetail";
import EmailList from "../EmailList/EmailList";
import Header from "../Header/Header";
import PopUp from "../PopUp/PopUp";

function Inbox() {
  const [selectedMail, setSelectedMail] = useState(null);

  const handleObjectClick = (object) => {
    setSelectedMail(object);
  };

  const handleBackdropClick = () => {
    setIsPopupOpen(false);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleThemeSwitch = (checked) => {
    setIsDarkMode(checked);
  };
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.shiftKey && event.key === "J") {
        setIsPopupOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={isDarkMode ? "darkmode" : ""}>
      <div className="bg-white">
        <Header onThemeToggle={handleThemeSwitch} />
        <div className="align-items-start d-flex mail-list-detail">
          <EmailList onObjectClick={handleObjectClick} />
          <EmailDetail selectedMail={selectedMail} />
        </div>
        {isPopupOpen && <PopUp onBackdropClick={handleBackdropClick} />}
      </div>
    </div>
  );
}

export default Inbox;
