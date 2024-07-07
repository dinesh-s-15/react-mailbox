import React, { useRef, useState } from "react";
import search from "../../assets/search.svg";

const EmailList = ({ onObjectClick }) => {
  const buttonRefs = useRef([]);

  const[emails, setEmails] = useState([
    {
      sender: "William Smith",
      initials: "WS",
      selected: true,
      senderEmail: "william.smith@xyz.com",
      subject: "Meeting Tomorrow",
      message: `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.`,
      time: "8 months ago",
      timestamp: "Mar 10, 2023, 3:00:00 PM",
      tags: ["meeting", "work", "important"],
      status: "read",
    },
    {
      sender: "Alice Smith",
      initials: "AS",
      selected: false,
      subject: "Re: Project Update",
      message: `Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.

      I have a few minor suggestions that I'll include in the attached document.
      
      Let's discuss these during our next meeting. Keep up the excellent work!`,
      time: "8 months ago",
      timestamp: "Mar 10, 2023, 3:00:00 PM",
      tags: ["work", "important"],
      status: "read",
    },
    {
      sender: "Bob Johnson",
      initials: "BJ",
      selected: false,
      subject: "Weekend Plans",
      message: `
    Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.
    
    If you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.
    
    Looking forward to your response!
    
    Best, Bob
    
    I have a few minor suggestions that I'll include in the attached document.
    
    Let's discuss these during our next meeting. Keep up the excellent work!
    important`,
      time: "about 1 year ago",
      timestamp: "Mar 10, 2023, 3:00:00 PM",
      tags: ["important"],
      status: "unread",
    },
  ]);
  const handleDivClick = (index) => {
    if (buttonRefs.current[index]) {
      handleClick(index);
    }
  };

  const handleClick = (index) => {
    const updatedEmails = emails.map((email, eindex) => ({
      ...email,
      selected: eindex === index,
    }));
    setEmails(updatedEmails);
    onObjectClick(emails[index]); // Send the clicked email object to parent
  };


  return (
    <div className="d-flex flex-column gap-3 p-3 width-30 mail-list-section">
      <label className="align-items-center d-flex justify-content-center shadow-sm search-container">
        <img src={search} alt="search" className="" />
        <input type="text" placeholder="Search" className="border-0 w-100" />
      </label>
      <div className="d-flex flex-column">
        {emails.map((email, index) => (
          <div
            key={index}
            className={`d-flex flex-column gap-2 py-3 mail-item ${
              email.selected ? "mail-item-selected" : ""
            }`}
            onClick={() => handleDivClick(index)}
          >
            <button
              ref={(el) => (buttonRefs.current[index] = el)}
              onClick={() => handleClick(index)}
              style={{ display: "none" }}
            ></button>
            <div className="align-items-start align-self-stretch d-flex flex-column gap-1">
              <div className="align-items-center align-self-stretch d-flex">
                <p className="sender-name d-flex">
                  {email.sender}
                  {email.status === "unread" && (
                    <span className="align-self-center d-flex unread"></span>
                  )}
                </p>
                <div className="d-flex justify-content-end time-section">
                  <p>{email.time}</p>
                </div>
              </div>
              <p className="info-section">{email.subject}</p>
            </div>
            <p className="description-section align-self-stretch m-0 message-preview">
              {email.message}
            </p>
            <div className="align-self-stretch d-flex gap-2">
              {email.tags.includes("meeting") && (
                <button className="align-items-center mail-tag meeting-flag d-flex flex-row justify-content-center">
                  meeting
                </button>
              )}
              {email.tags.includes("work") && (
                <button className="align-items-center mail-tag work-flag d-flex flex-row justify-content-center">
                  work
                </button>
              )}
              {email.tags.includes("important") && (
                <button className="align-items-center mail-tag important-flag d-flex flex-row justify-content-center">
                  important
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailList;
