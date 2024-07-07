import "../../App.css"; import search from "../../assets/search.svg"; import calender from "../../assets/calender.svg"; import emoji from "../../assets/emoji.svg"; import calculator from "../../assets/calculator.svg"; import profile from "../../assets/profile.svg"; import billing from "../../assets/billing.svg"; import settings from "../../assets/settings.svg";
function PopUp({ onBackdropClick }) {
    const handleDivClick = (event) => { if (event.target.className === 'd-flex h-100') { onBackdropClick(); } };
    return (<div className="modal-overlay">
        <div className="modal d-block" tabindex="-1" role="dialog" aria-modal="true"   >
            <div className="d-flex h-100" name onClick={handleDivClick}>
                <div className="modal-content m-auto">
                    <div class="modal-search px-3 py-1">
                        <div>
                            <label className="d-flex">
                                <img src={search} alt="search" className="" />
                                <input type="text" placeholder="Type a command or search..." className="border-0 w-100 p-2" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 px-3">
                            <p class="mb-0">Suggestions</p>
                        </div>
                        <div class="px-3 gap-2 d-flex options">
                            <img src={calender} alt="calender" className="" />
                            <p class="mb-0 w-100">Calendar</p>
                        </div>
                        <div class="px-3 gap-2 d-flex options">
                            <img src={emoji} alt="emoji" className="" />
                            <p class="mb-0 w-100">Search emoji</p>
                        </div>
                        <div class="px-3 gap-2 d-flex options">
                            <img src={calculator} alt="calculator" className="" />
                            <p class="mb-0 w-100">Calculator</p>
                        </div>
                    </div>
                    <div class="py-2 px-3">
                        <p class="mb-0">Settings</p>
                    </div>
                    <div class="px-3 gap-2 d-flex options">
                        <img src={profile} alt="profile" className="" />


                        <p class="mb-0 w-100">
                            <span>Profile</span>
                            <span className="float-end">⌘P</span>
                        </p>
                    </div>
                    <div class="px-3 gap-2 d-flex options">
                        <img src={billing} alt="billing" className="" />
                        <p class="mb-0 w-100">
                            <span>Billing</span>
                            <span className="float-end">⌘B</span>
                        </p>
                    </div>
                    <div class="px-3 gap-2 d-flex options">
                        <img src={settings} alt="settings" className="" />
                        <p class="mb-0 w-100">
                            <span>Settings</span>
                            <span className="float-end">⌘S</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default PopUp;