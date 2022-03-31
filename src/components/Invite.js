import React from 'react'

const Invite = () => {
  return (
    <>
     <div className="w-full border-box main">
        {/* <!-- top-bar --> */}
        <div className="w-full border-box flex items-center top-bar">
            <div className="flex items-center">
                <i className="bi bi-arrow-left text-blue cursor-pointer"></i>
                <h3 className="px-10">Refer and Earn</h3>
            </div>
            <div>
                <i className="bi bi-question-circle text-blue cursor-pointer"></i>
            </div>
        </div>
        {/* <!-- refer banner  --> */}
        <div className="w-full banner">
            <img src={require('../image/banner.jpg')} className="w-full" alt=""/>
        </div>
        <div className="w-full flex flex-col items-center border-box pt-10">
            <p style={{borderTop: "2px solid #2946a2",padding: "5px"}}>Invite</p>
            {/* <!-- social media  --> */}
            <div className="w-full justify-between border-box px-10 flex social-app py-10">
                <div className="flex flex-col items-center cursor-pointer">
                    <i className="bi bi-whatsapp social-icon p-10"></i>
                    Whatsapp
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <i className="bi bi-instagram social-icon p-10"></i>
                    Instagram
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <i className="bi bi-chat-left-dots social-icon p-10"></i>
                    SMS
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <i className="bi bi-three-dots social-icon p-10"></i>
                    More
                </div>
            </div>
            <div className="contacts w-full flex flex-col items-center border-box px-10 py-10">
                <div className="w-full flex justify-between">
                    <h3>Suggested Contacts</h3>
                    <p className="cursor-pointer">View All</p>
                </div>
                {/* <!-- recent contact  --> */}
                <div className="w-full border-box px-10 py-10">
                    <div className="w-full flex justify-between">
                        <div className="flex cursor-pointer flex-col items-center">
                            <div className="box flex justify-center items-center">U</div>
                            <p>Usman</p>
                        </div>
                        <div className="flex flex-col  cursor-pointer  justify-center items-center">
                            <div className="box flex justify-center items-center">U</div>
                            <p>Usman</p>
                        </div>
                        <div className="flex flex-col cursor-pointer  items-center">
                            <div className="box flex justify-center items-center">U</div>
                            <p>Usman</p>
                        </div>
                        <div className="flex flex-col cursor-pointer  items-center">
                            <div className="box flex justify-center items-center">U</div>
                            <p>Usman</p>
                        </div>
                    </div>
                </div>
                {/* <!-- search  --> */}
                <div className="search-contact w-full border-box flex">
                    <i className="bi bi-search"></i>
                    <input type="search" className="w-full" placeholder="Search by Number or Name"/>
                </div>
                {/* <!-- Contact list  --> */}
                <div className="w-full border-box px-10 py-10 flex flex-col items-center">
                    <div className="w-full flex justify-between items-center py-5">
                        <div className="flex items-center">
                            <div className="box1 flex justify-center items-center">U</div>
                            <div className="px-10  cursor-pointer ">
                                <p>Usman</p>
                                <p>9839872992</p>
                            </div>
                        </div>
                        <button className="invite-btn px-10 text-blue">
                            Invite
                        </button>
                    </div>
                    <div className="w-full flex justify-between items-center py-5">
                        <div className="flex items-center">
                            <div className="box1 flex justify-center items-center">U</div>
                            <div className="px-10 cursor-pointer ">
                                <p>Usman</p>
                                <p>9839872992</p>
                            </div>
                        </div>
                        <button className="invite-btn px-10 text-blue">
                            Invite
                        </button>
                    </div>
                    <div className="w-full flex justify-between items-center py-5">
                        <div className="flex items-center">
                            <div className="box1 flex justify-center items-center">U</div>
                            <div className="px-10 cursor-pointer ">
                                <p>Usman</p>
                                <p>9839872992</p>
                            </div>
                        </div>
                        <button className="invite-btn px-10 text-blue">
                            Invite
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Invite