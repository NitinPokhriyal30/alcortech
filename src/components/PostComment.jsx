import * as React from 'react'
import { BsFillImageFill } from 'react-icons/bs'
import { HiEmojiHappy } from 'react-icons/hi'
import { AiOutlineFileGif } from 'react-icons/ai'

export default function PostComment({ comment, ...props }) {
  const [showReplyInput, setShowReplyInput] = React.useState(false)

  const PostUser = comment.user.img
  const user = comment.user

  return (
    <div className="relative">
      <div className="flex items-start mt-3">
        <div>
          <img className="w-[80%]" src={user.img} alt="comment" />
        </div>
        <div className="w-full ">
          <div>
            <div className="bg-[#EDEDED] flex items-start justify-between rounded-b-xl rounded-tr-xl w-full px-6 py-3">
              <div>
                <p className="font-Lato font-bold text-[16px] leading-5 text-[#464646]">
                  {user.firstName} {user.lastName}{' '}
                </p>
                <p className="font-Lato font-normal text-[16px] leading-5 text-[#464646]">
                  {comment.message}{' '}
                </p>
              </div>
              <div>
                <p className="font-Lato font-normal text-sm text-[#919191]">
                  {new Date(comment.timestamp).toLocaleString()} ago
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-1 pl-4">
            {comment.reactions.length > 0 && (
              <div className="z-10 rounded-[17px] border-[0.6px] bg-white border-[#D1D1D1] pr-2 pb-[2px] text-2xl flex items-center gap-1">
                {comment.reactions[0].emoji}{' '}
                <span className="font-Lato text-xs text-[#747474]">{comment.reactions.length}</span>
              </div>
            )}
            <div className="relative">
              <button className="text-xs hover:bg-[#F7F7F7] rounded-[4px] peer p-2 font-Lato flex items-center gap-1 text-[16px] text-primary">
                React
              </button>
              <div className="hidden drop-shadow-[0px_2px_3px_#00000029] px-4 py-2 bg-white absolute -top-full left-0 peer-hover:flex hover:flex gap-4 rounded-[19px]">
                {['❤', '👍', '👏', '✔', '😍'].map((emoji) => (
                  <button
                    key={emoji}
                    className="w-6 h-6 rounded-full inline-block hover:bg-translucent text-sm font-Lato font-black"
                    onClick={() => props.addReaction(comment.id, emoji)}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
            <p className="font-Lato text-xs text-primary">|</p>
            <p
              className="hover:bg-[#F7F7F7] rounded-[4px] peer p-2 flex items-center gap-1 text-[16px] font-Lato text-xs text-primary"
              onClick={() => setShowReplyInput((p) => !p)}
            >
              Reply
            </p>
          </div>

          {showReplyInput && (
            <div className="mt-1 mr-0 mb-0 ml-auto">
              <div className="flex items-center mt-3 ">
                <div>
                  <img className="w-[80%]" src={PostUser} alt="comment" />
                </div>
                <div className="w-full">
                  <form
                    onSubmit={(ev) => {
                      ev.preventDefault()
                      const data = Object.fromEntries(new FormData(ev.target))

                      props.addComment(comment.id, data.message)
                      ev.target.reset()
                      ev.target.elements.message.blur()
                    }}
                    className="flex justify-end items-center relative"
                  >
                    <input
                      placeholder="Add A comment"
                      name="message"
                      className=" bg-[#EDEDED] rounded-b-xl rounded-tr-xl w-full px-6 py-3 placeholder:text-[16px] placeholder:text-[#ABACAC] placeholder:font-Lato border-none outline-none"
                    />
                    <div className="absolute mr-5 w-[20%] flex justify-between ">
                      <HiEmojiHappy className="text-[#D1D1D1] text-2xl" />
                      <BsFillImageFill className="text-[#D1D1D1] text-2xl" />
                      <AiOutlineFileGif className="text-[#D1D1D1] text-2xl" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          <div className="">
            {comment.replies.map((comment) => (
              <PostComment key={comment.id} comment={comment} addComment={props.addComment} addReaction={props.addReaction} />
            ))}
          </div>
        </div>
      </div>

      {/*------------------ Add A comment----------------------- */}
    </div>
  )
}
