// import '../../App.css';
// import "../../dark-theme.css"
function EmailDetail({ selectedMail }) {

    const defaultMail = {
        sender: "William Smith",
        initials: "WS",
        senderEmail: "william.smith@xyz.com",
        subject: "Meeting Tomorrow",
        message: `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.`,
        time: "8 months ago",
        timestamp: "Mar 10, 2023, 3:00:00 PM",
        tags: ["meeting", "work", "important"],
      };

    const displayMail = selectedMail || defaultMail;

    return(
        <div className='flex-1'>
            <div className='align-items-start d-flex flex-column gap-3'>
                <div className='align-items-start align-self-stretch d-flex mt-3 mx-3'>
                    <p className='align-items-center d-flex justify-content-center text-center name-initials'>{displayMail && displayMail.initials}</p>
                    <div className='align-self-center d-flex flex-column gap-1 flex-1 ml-1rem'>
                        <div className='d-flex'>
                            <h1 className='sender-name'>{displayMail && displayMail.sender}</h1>
                        </div>
                        <div className='d-flex'>
                            <p className='subject-section'>{displayMail && displayMail.subject}</p>
                        </div>
                        <div className='d-flex'>
                            <p className='subject-section'>Reply-To: {displayMail && displayMail.senderEmail}</p>
                        </div>
                    </div>
                    <p className='timestamp'>{displayMail && displayMail.timestamp}</p>
                </div>
                <div></div>
            </div>
            <div className='align-items-start d-flex flex-column'>
                <p className='align-self-stretch mail-content'>
                    {displayMail && displayMail.message}
                </p>
                <div></div>
            </div>
            <div className='d-flex flex-column gap-3 reply-section'>
                <div className="p-3">
                <label className='align-items-center d-flex justify-content-center reply-box'>
                    <input type="text" placeholder={displayMail ? `Reply to ${displayMail.sender}...` : 'Select an email to reply...'} className='border-0 w-100'/>
                </label>
                <div className='align-items-center d-flex justify-content-center'>
                    <div className='align-items-center d-flex flex-1'>
                        <div>
                            <div className='sec1'>
                                <div className='sec2'>
                                    <div className='sec3'></div>
                                    <div className='sec4'></div>
                                </div>
                                <div className='sec5'></div>
                                <input type="checkbox" className='radio-input'/>
                            </div>
                        </div>
                        <p className='mute-label'>Mute this thread</p>
                    </div>
                    <button className='send-btn align-items-center d-flex flex-row justify-content-center btn'>Send</button>
                </div>
                </div>
            </div>

        </div>
    )
}

export default EmailDetail;