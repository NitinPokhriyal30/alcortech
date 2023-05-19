import React from "react";
import {
    BsFillChatRightTextFill,
    BsFillImageFill,
    BsPlusCircleFill,
    BsThreeDots,
} from "react-icons/bs";
import PostUser from "../assets/images/post-img/post-user.png";
import { BiHeartCircle } from "react-icons/bi";
import { HiEmojiHappy } from "react-icons/hi";
import { AiOutlineCaretDown, AiOutlineFileGif } from "react-icons/ai";
import { AchievementBanner } from "./AchievementBanner";

const PostCard = () => {
    return (
        <div>
            <div className="bg-white rounded-lg px-8 pt-8 pb-10">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="flex items-center justify-between gap-8">
                            <div className="flex items-center gap-1">
                                <img className="w-1/4" src={PostUser} alt="post-user" />
                                <img className="w-1/4" src={PostUser} alt="post-user" />
                                <p className="text-lg font-Lato font-bold text-primary">+30</p>
                            </div>
                            <div>
                                <p className="font-Lato font-normal text-[#919191]">
                                    3 hrs ago
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <BsThreeDots className="text-[#B1B1B1] text-lg" />
                    </div>
                </div>

                <div className="mt-4">
                    <p className="font-Lato font-bold text-[16px] leading-5">
                        <span className="text-[#464646]">Semad Javed:</span>
                        <span className="text-primary">@Sunita Gulia, @Lisa Clinton</span>
                        <span className="text-[#ABACAC]">#vision #culture</span>
                    </p>

                    <p className="font-Lato font-normal mt-2 text-[#464646] text-[16px] leading-5">
                        For helping me launch a marketing campaign so that we can generate
                        new business
                    </p>
                </div>

                <div>
                    <div className="flex items-center gap-5 mt-4">
                        <div className="relative">
                            <button className="hover:bg-[#F7F7F7] rounded-[4px] peer p-2 font-Lato flex items-center gap-1 font-light text-[16px] text-primary">
                                <span>
                                    <BsPlusCircleFill />
                                </span>{" "}
                                Add Points
                            </button>
                            <div className="hidden drop-shadow-[0px_2px_3px_#00000029] px-4 py-2 bg-white absolute bottom-10 left-0 peer-hover:flex hover:flex gap-4 rounded-[19px]">
                                <p className="text-sm font-Lato font-black text-[#03BFC7]">
                                    +10
                                </p>
                                <p className="text-sm font-Lato font-black text-[#0374C7]">
                                    +20
                                </p>
                                <p className="text-sm font-Lato font-black text-[#6554E3]">
                                    +30
                                </p>
                                <p className="text-sm font-Lato font-black text-[#B754E3]">
                                    +40
                                </p>
                                <p className="text-sm font-Lato font-black text-[#F46CE9]">
                                    +50
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <button className="hover:bg-[#F7F7F7] rounded-[4px] peer p-2 font-Lato flex items-center gap-1 font-light text-[16px] text-primary">
                                <span>
                                    <BiHeartCircle />
                                </span>{" "}
                                React
                            </button>
                            <div className="hidden drop-shadow-[0px_2px_3px_#00000029] px-4 py-2 bg-white absolute bottom-10 left-0 peer-hover:flex hover:flex gap-4 rounded-[19px]">
                                <p className="text-sm font-Lato font-black text-[#03BFC7]">❤</p>
                                <p className="text-sm font-Lato font-black text-[#0374C7]">
                                    👍
                                </p>
                                <p className="text-sm font-Lato font-black text-[#6554E3]">
                                    👏
                                </p>
                                <p className="text-sm font-Lato font-black text-[#B754E3]">✔</p>
                                <p className="text-sm font-Lato font-black text-[#F46CE9]">
                                    😍
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="font-Lato flex items-center gap-1 font-light text-[16px] text-primary">
                                <span>
                                    <BsFillChatRightTextFill />
                                </span>{" "}
                                Comment
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-3 border-b-[1px] border-[#EDEDED] pb-1">
                        <div className="rounded-[17px] border-[0.6px] border-[#D1D1D1] pr-2 pb-[2px] text-2xl flex items-center gap-1">
                            😊 <span className="font-Lato text-xs text-[#747474]">1</span>
                        </div>

                        <div>
                            <p className="font-Lato text-[16px] text-[#D1D1D1]">1 Comment</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex items-center mt-3">
                        <div>
                            <img className="w-[80%]" src={PostUser} alt="comment" />
                        </div>
                        <div className="w-full">
                            <div className="flex justify-end items-center relative">
                                <input
                                    placeholder="Type your comment here"
                                    className=" bg-[#EDEDED] rounded-b-xl rounded-tr-xl w-full px-6 py-3 placeholder:text-[16px] placeholder:text-[#ABACAC] placeholder:font-Lato border-none outline-none"
                                />
                                <div className="absolute mr-5 w-[20%] flex justify-between ">
                                    <HiEmojiHappy className="text-[#D1D1D1] text-2xl" />
                                    <BsFillImageFill className="text-[#D1D1D1] text-2xl" />
                                    <AiOutlineFileGif className="text-[#D1D1D1] text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex items-center mt-3">
                        <div>
                            <img className="w-[80%]" src={PostUser} alt="comment" />
                        </div>
                        <div className="w-full ">
                            <div className="bg-[#EDEDED] flex items-start justify-between rounded-b-xl rounded-tr-xl w-full px-6 py-3">
                                <div>
                                    <p className="font-Lato font-bold text-[16px] leading-5 text-[#464646]">
                                        Sunita Gulia{" "}
                                    </p>
                                    <p className="font-Lato font-normal text-[16px] leading-5 text-[#464646]">
                                        Thank You, Semad{" "}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-Lato font-normal text-sm text-[#919191]">
                                        2 hrs ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-16 top-14 flex items-center gap-3 pt-1">
                        <div className=" rounded-[17px]  border-[0.6px] bg-white border-[#D1D1D1] pr-2 pb-[2px] text-2xl flex items-center gap-1">
                            😍 <span className="font-Lato text-xs text-[#747474]">1</span>
                        </div>
                        <p className="font-Lato text-xs text-primary">React</p>
                        <p className="font-Lato text-xs text-primary">|</p>
                        <p className="font-Lato text-xs text-primary">Reply</p>
                    </div>
                    {/*------------------ Add A comment----------------------- */}

                    <div className=" w-[90%] mt-10 mr-0 mb-0 ml-auto">
                        <div className="flex items-center mt-3 ">
                            <div>
                                <img className="w-[80%]" src={PostUser} alt="comment" />
                            </div>
                            <div className="w-full">
                                <div className="flex justify-end items-center relative">
                                    <input
                                        placeholder="Add A comment"
                                        className=" bg-[#EDEDED] rounded-b-xl rounded-tr-xl w-full px-6 py-3 placeholder:text-[16px] placeholder:text-[#ABACAC] placeholder:font-Lato border-none outline-none"
                                    />
                                    <div className="absolute mr-5 w-[20%] flex justify-between ">
                                        <HiEmojiHappy className="text-[#D1D1D1] text-2xl" />
                                        <BsFillImageFill className="text-[#D1D1D1] text-2xl" />
                                        <AiOutlineFileGif className="text-[#D1D1D1] text-2xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/*--------------------------- second user post----------------------------------------------- */}

            <div className="bg-white rounded-lg px-8 pt-8 pb-12 mt-3">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="flex items-center justify-between gap-8">
                            <div className="flex items-center gap-1">
                                <img className="w-1/2" src={PostUser} alt="post-user" />
                                <p className="text-lg font-Lato font-bold text-primary">+50</p>
                            </div>
                            <div>
                                <p className="font-Lato font-normal text-[#919191]">
                                    3 hrs ago
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <BsThreeDots className="text-[#B1B1B1] text-lg" />
                    </div>
                </div>

                <div className="mt-4">
                    <p className="font-Lato font-bold text-[16px] leading-5">
                        <span className="text-[#464646]">Shraddha Rawat:</span>
                        <span className="text-primary">@Sheetal Arora</span>
                        <span className="text-[#ABACAC]">#collaboration</span>
                    </p>

                    <p className="font-Lato font-normal mt-2 text-[#464646] text-[16px] leading-5">
                        Appreciate your assistance with the project audit.
                    </p>
                </div>

                <div>
                    <div className="flex items-center gap-5 mt-4">
                        <div className="relative">
                            <button className="hover:bg-[#F7F7F7] rounded-[4px] peer p-2 font-Lato flex items-center gap-1 font-light text-[16px] text-primary">
                                <span>
                                    <BsPlusCircleFill />
                                </span>
                                Add Points
                            </button>
                            <div className="hidden drop-shadow-[0px_2px_3px_#00000029] px-4 py-2 bg-white absolute bottom-10 left-0 peer-hover:flex hover:flex gap-4 rounded-[19px]">
                                <p className="text-sm font-Lato font-black text-[#03BFC7]">
                                    +10
                                </p>
                                <p className="text-sm font-Lato font-black text-[#0374C7]">
                                    +20
                                </p>
                                <p className="text-sm font-Lato font-black text-[#6554E3]">
                                    +30
                                </p>
                                <p className="text-sm font-Lato font-black text-[#B754E3]">
                                    +40
                                </p>
                                <p className="text-sm font-Lato font-black text-[#F46CE9]">
                                    +50
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <button className="hover:bg-[#F7F7F7] rounded-[4px] peer p-2 font-Lato flex items-center gap-1 font-light text-[16px] text-primary">
                                <span>
                                    <BiHeartCircle />
                                </span>
                                React
                            </button>
                            <div className="hidden drop-shadow-[0px_2px_3px_#00000029] px-4 py-2 bg-white absolute bottom-10 left-0 peer-hover:flex hover:flex gap-4 rounded-[19px]">
                                <p className="text-sm font-Lato font-black text-[#03BFC7]">❤</p>
                                <p className="text-sm font-Lato font-black text-[#0374C7]">
                                    👍
                                </p>
                                <p className="text-sm font-Lato font-black text-[#6554E3]">
                                    👏
                                </p>
                                <p className="text-sm font-Lato font-black text-[#B754E3]">✔</p>
                                <p className="text-sm font-Lato font-black text-[#F46CE9]">
                                    😍
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="font-Lato flex items-center gap-1 font-light text-[16px] text-primary">
                                <span>
                                    <BsFillChatRightTextFill />
                                </span>
                                Comment
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-3 border-b-[1px] border-[#EDEDED] pb-1">
                        <div>
                            <p className="font-Lato text-[16px] text-[#D1D1D1]">1 Comment</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex items-center mt-3">
                        <div>
                            <img className="w-[80%]" src={PostUser} alt="comment" />
                        </div>
                        <div className="w-full ">
                            <div className="bg-[#EDEDED] flex items-start justify-between rounded-b-xl rounded-tr-xl w-full px-6 py-3">
                                <div>
                                    <p className="font-Lato font-bold text-[16px] leading-5 text-[#464646]">
                                        Sheetal Arora{" "}
                                    </p>
                                    <p className="font-Lato font-normal text-[16px] leading-5 text-[#464646]">
                                        Thank You 😍{" "}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-Lato font-normal text-sm text-[#919191]">
                                        2 hrs ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-16 top-14 flex items-center gap-3 pt-3">
                        <p className="font-Lato text-xs text-primary">React</p>
                        <p className="font-Lato text-xs text-primary">|</p>
                        <p className="font-Lato text-xs text-primary">Reply</p>
                    </div>
                </div>
            </div>



            {/*----------------- Achievement banner -----------------------*/}

            <AchievementBanner />
        </div>
    );
};

export default PostCard;
