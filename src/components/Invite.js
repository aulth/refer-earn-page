import React from 'react'

const Invite = () => {
  return (
    <>
     <div class="w-full border-box main">
        {/* <!-- top-bar --> */}
        <div class="w-full border-box flex items-center top-bar">
            <div class="flex items-center">
                <i class="bi bi-arrow-left text-blue cursor-pointer"></i>
                <h3 class="px-10">Refer and Earn</h3>
            </div>
            <div>
                <i class="bi bi-question-circle text-blue cursor-pointer"></i>
            </div>
        </div>
        {/* <!-- refer banner  --> */}
        <div class="w-full banner">
            <img src={require('../image/banner.jpg')} class="w-full" alt=""/>
        </div>
        <div class="w-full flex flex-col items-center border-box pt-10">
            <p style={{borderTop: "2px solid #2946a2",padding: "5px"}}>Invite</p>
            {/* <!-- social media  --> */}
            <div class="w-full justify-between border-box px-10 flex social-app py-10">
                <div class="flex flex-col items-center cursor-pointer">
                    <i class="bi bi-whatsapp social-icon p-10"></i>
                    Whatsapp
                </div>
                <div class="flex flex-col items-center cursor-pointer">
                    <i class="bi bi-instagram social-icon p-10"></i>
                    Instagram
                </div>
                <div class="flex flex-col items-center cursor-pointer">
                    <i class="bi bi-chat-left-dots social-icon p-10"></i>
                    SMS
                </div>
                <div class="flex flex-col items-center cursor-pointer">
                    <i class="bi bi-three-dots social-icon p-10"></i>
                    More
                </div>
            </div>
            <div class="contacts w-full flex flex-col items-center border-box px-10 py-10">
                <div class="w-full flex justify-between">
                    <h3>Suggested Contacts</h3>
                    <p class="cursor-pointer">View All</p>
                </div>
                {/* <!-- recent contact  --> */}
                <div class="w-full border-box px-10 py-10">
                    <div class="w-full flex justify-between">
                        <div class="flex cursor-pointer flex-col items-center">
                            <div class="box flex justify-center items-center">U</div>
                            <p>Usman</p>
                        </div>
                        <div class="flex flex-col  cursor-pointer  justify-center items-center">
                            <div class="box flex justify-center items-center">U</div>
                            <p>Usman</p>
                        </div>
                        <div class="flex flex-col cursor-pointer  items-center">
                            <div class="box flex justify-center items-center">U</div>
                            <p>Usman</p>
                        </div>
                        <div class="flex flex-col cursor-pointer  items-center">
                            <div class="box flex justify-center items-center">U</div>
                            <p>Usman</p>
                        </div>
                    </div>
                </div>
                {/* <!-- search  --> */}
                <div class="search-contact w-full border-box flex">
                    <i class="bi bi-search"></i>
                    <input type="search" class="w-full" placeholder="Search by Number or Name"/>
                </div>
                {/* <!-- Contact list  --> */}
                <div class="w-full border-box px-10 py-10 flex flex-col items-center">
                    <div class="w-full flex justify-between items-center py-5">
                        <div class="flex items-center">
                            <div class="box1 flex justify-center items-center">U</div>
                            <div class="px-10  cursor-pointer ">
                                <p>Usman</p>
                                <p>9839872992</p>
                            </div>
                        </div>
                        <button class="invite-btn px-10 text-blue">
                            Invite
                        </button>
                    </div>
                    <div class="w-full flex justify-between items-center py-5">
                        <div class="flex items-center">
                            <div class="box1 flex justify-center items-center">U</div>
                            <div class="px-10 cursor-pointer ">
                                <p>Usman</p>
                                <p>9839872992</p>
                            </div>
                        </div>
                        <button class="invite-btn px-10 text-blue">
                            Invite
                        </button>
                    </div>
                    <div class="w-full flex justify-between items-center py-5">
                        <div class="flex items-center">
                            <div class="box1 flex justify-center items-center">U</div>
                            <div class="px-10 cursor-pointer ">
                                <p>Usman</p>
                                <p>9839872992</p>
                            </div>
                        </div>
                        <button class="invite-btn px-10 text-blue">
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