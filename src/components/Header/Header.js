// import "../../App.css";
// import "../../dark-theme.css"
import archive from "../../assets/archive.svg";
import archivex from "../../assets/archive-x.svg";
import trash from "../../assets/trash.svg";
import clock from "../../assets/clock.svg";
import reply from "../../assets/reply.svg";
import replyall from "../../assets/reply-all.svg";
import forward from "../../assets/forward.svg";
import options from "../../assets/ellipsis-vertical.svg";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import * as React from "react";

function Header({onThemeToggle}) {
  let [isDarkMode, setIsDarkMode] = React.useState(true);
  const handleThemeSwitch = ()=>{
    setIsDarkMode(!isDarkMode);
    onThemeToggle(isDarkMode)
  }

  return (
    <header className="align-items-start d-flex flex-column header-section">
      <div className="align-items-center align-self-stretch d-flex h-100">
        <div className="align-items-center d-flex gap-4 justify-content-between px-3 py-2 header-section-left">
          <h5 className="align-items-center d-flex inbox-text">Inbox 
          <div className="ml-1rem">
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={handleThemeSwitch}
            size={25}
            moonColor="black"
          />
          </div>
          </h5>
          
          <div className="d-flex justify-content-center p-1 btn-section">
            <button className="align-items-center bg-white border-0 btn d-flex flex-row justify-content-center text-center mail-filter-btn allmail-btn">
              All Mail
            </button>
            <button className="align-items-center border-0 btn d-flex flex-row justify-content-center text-center mail-filter-btn unread-btn">
              Unread
            </button>
          </div>
        </div>
        <div className="align-items-center d-flex justify-content-between px-3 py-2 header-section-right">
          <div className="d-flex">
            <div className="icons-left">
              <img src={archive} className="px-3"></img>
              <img src={archivex} className="px-3"></img>
              <img src={trash} className="px-3"></img>
            </div>
            <div className="py-2">
              <img src={clock} className="px-3"></img>
            </div>
          </div>
          <div className="d-flex">
            <div className="icons-left">
              <img src={reply} className="px-3"></img>
              <img src={replyall} className="px-3"></img>
              <img src={forward} className="px-3"></img>
            </div>
            <div className="py-2">
              <img src={options} className="px-3"></img>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
