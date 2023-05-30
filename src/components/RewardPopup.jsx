import React from 'react'
import { RxCross2 } from "react-icons/rx"
import PopupLogo from "../assets/images/right-section/amazon-popup-logo.png"

const RewardPopup = () => {
    return (
        <div className='h-screen'>
            <div className='bg-white rounded-md p-2 relative'>
                <div className='absolute right-2'><RxCross2 /></div>
                <div className='grid grid-cols-2  py-3 px-5'>
                    <div className='m-auto  '>
                        <img src={PopupLogo} alt="amamzon" />
                    </div>
                    <div className='px-6 border-l-2 border-[#EFEFEF]'>
                        <div>
                            <p className='font-Lato text-sm text-[#7B7B7B]'>Use your Amazon.in Gift Card to shop from a huge selection of Books, Electronics, Music, Movies, Software, Apparel, Toys, and more.</p>
                        </div>
                        <div className='mt-7'>
                            <select id="countries" className="bg-transparent border-[1px] border-[#D1D1D1] text-[#747474] text-sm rounded-lg focus:ring-[#D1D1D1] focus:border-[#D1D1D1] block w-[80%] py-2 px-3  placeholder-[#747474] ">
                                <option className='font-Lato text-[#747474]' selected>Select</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div class="flex items-center mt-3">
                            <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-transparent border-[1px] border-[#D1D1D1] rounded focus:border-[#D1D1D1] dark:focus:ring-[#D1D1D1] " />
                            <label for="link-checkbox" className="ml-2 text-[13px] font-Lato  text-[#747474] dark:text-gray-300">Send this gift card to a friend</label>
                        </div>
                        <div className='py-5'>
                            <button className='rounded-[4px] py-1 font-Lato text-[14px] border-[1px] border-[#EFEFEF] px-4 bg-primary text-white'>Redeem</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RewardPopup