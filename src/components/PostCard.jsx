import React from 'react'
import { store } from '../redux/store'
import {
  BsFillChatRightTextFill,
  BsFillImageFill,
  BsPlusCircleFill,
  BsThreeDots,
} from 'react-icons/bs'
import PostUser from '../assets/images/post-img/post-user.png'
import MyProfileImg from '../assets/images/user-profile/male_avatar.jpg'
import { BiHeartCircle } from 'react-icons/bi'
import { HiEmojiHappy } from 'react-icons/hi'
import { AiOutlineCaretDown, AiOutlineFileGif } from 'react-icons/ai'
import { AchievementBanner } from './AchievementBanner'
import PostComment from './PostComment'

function Comment(message, user, reactions = [], ...replies) {
  return {
    id: Math.random().toString(),
    user: Object.assign(user, { img: PostUser, id: Math.random().toString() }),
    reactions: reactions.map((emoji) => ({
      user: { id: Math.random().toString() },
      emoji,
    })),
    message,
    timestamp: new Date(),
    replies: replies || [],
  }
}

const POINTS = [
  {
    points: 10,
    color: '#0374C7',
  },
  {
    points: 20,
    color: '#0374C7',
  },
  {
    points: 30,
    color: '#6554E3',
  },
  {
    points: 40,
    color: '#B754E3',
  },
  {
    points: 50,
    color: '#F46CE9',
  },
]

const me = {
  id: 99,
  firstName: 'Semad',
  lastName: 'Javed',
  img: PostUser,
}
let setPost

const PostCard = ({ post: _post }) => {
  const [post, _setPost] = React.useState(_post)
  const [showComments, setShowComments] = React.useState(false)
  setPost = _setPost

  const addedPoints = post.sender.find((x) => x.id === me.id)?.points
  const hasAddedPoints = !!addedPoints

  return (
    <div className="mt-3">
      <div className="bg-white rounded-lg px-8 pt-8 pb-10">
        <div className="flex justify-between gap-3 items-center">
          <div className="flex-1">
            <div className="flex items-center justify-between gap-8">
              <div className="flex items-center gap-1">
                {post.sender.map((user) => (
                  <img
                    key={user.id}
                    className="h-12 w-12 object-cover rounded-full"
                    src={user.img}
                    alt="post-user"
                  />
                ))}

                <p className="text-lg font-Lato font-bold text-primary">+{post.sender[0].points}</p>
              </div>
              <div>
                <p className="font-Lato font-normal text-[#919191]">{new Date(post.timestamp).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          <div>
            <BsThreeDots className="text-[#B1B1B1] text-lg" />
          </div>
        </div>

        <div className="mt-4">
          <p className="font-Lato font-bold text-[16px] leading-5">
            <span className="text-[#464646]">
              {post.sender[0].firstName} {post.sender[0].lastName}:
            </span>{' '}
            <span className="text-primary">
              {post.recipients.map((user) => `@${user.firstName} ${user.lastName}`).join(' ')}
            </span>{' '}
            <span className="text-[#ABACAC]">
              {post.hashtags.map((hash) => `#${hash}`).join(' ')}
            </span>
          </p>

          <p className="font-Lato font-normal mt-2 text-[#464646] text-[16px] leading-5">
            {post.message}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-5 mt-4">
            {hasAddedPoints ? (
              <div>
                <p className="p-2 font-Lato text-[16px] text-primary">
                  You Added {addedPoints} Points!
                </p>
              </div>
            ) : (
              <div className="relative">
                <button className="hover:bg-translucent rounded-[4px] peer p-2 font-Lato flex items-center gap-1 font-light text-[16px] text-primary">
                  <span>
                    <BsPlusCircleFill />
                  </span>{' '}
                  Add Points
                </button>

                <div className="hidden drop-shadow-[0px_2px_3px_#00000029] px-4 py-2 bg-white absolute bottom-10 left-0 peer-hover:flex hover:flex gap-1 rounded-[19px]">
                  {POINTS.map(({ points, color }) => (
                    <button
                      key={points}
                      style={{ color: color }}
                      className={`w-8 h-8 rounded-full text-sm font-Lato font-black hover:bg-translucent`}
                      onClick={() => addPoints(post.id, points)}
                    >
                      +{points}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* post reaction button */}
            <div className="relative">
              <button className="hover:bg-translucent rounded-[4px] peer p-2 font-Lato flex items-center gap-1 font-light text-[16px] text-primary">
                <span>
                  <BiHeartCircle />
                </span>{' '}
                React
              </button>

              <div className="hidden drop-shadow-[0px_2px_3px_#00000029] px-4 py-2 bg-white absolute -top-[80%] left-0 peer-hover:flex hover:flex gap-4 rounded-[19px]">
                {['❤', '👍', '👏', '✔ ', '😍'].map((emoji) => (
                  <button
                    key={emoji}
                    className="w-6 h-6 rounded-full inline-block hover:bg-translucent text-sm font-Lato font-black"
                    onClick={() => addReaction(post.id, emoji)}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <button
                className="hover:bg-translucent rounded-[4px] peer p-2 font-Lato flex items-center gap-1 font-light text-[16px] text-primary"
                onClick={() => setShowComments((p) => !p)}
              >
                <span>
                  <BsFillChatRightTextFill />
                </span>{' '}
                Comment
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 border-b-[1px] border-[#EDEDED] pb-1">
            {post.reactions.length > 0 && (
              <div className="rounded-[17px] border-[0.6px] border-[#D1D1D1] pr-2 pb-[2px] text-2xl flex items-center gap-1">
                {post.reactions[0].emoji}{' '}
                <span className="font-Lato text-xs text-[#747474]">{post.reactions.length}</span>
              </div>
            )}

            {post.comment.replies.length > 0 && (
              <div>
                <p className="font-Lato text-[16px] text-[#D1D1D1]">
                  {post.comment.replies.length} Comments
                </p>
              </div>
            )}
          </div>
        </div>

        {showComments && (
          <>
            <div>
              <div className="flex items-center mt-3">
                <div>
                  <img className="w-[80%]" src={PostUser} alt="comment" />
                </div>
                <div className="w-full">
                  <form
                    onSubmit={(ev) => {
                      ev.preventDefault()
                      const data = Object.fromEntries(new FormData(ev.target))

                      addComment(post.comment.id, data.message)

                      ev.currentTarget.reset()
                      ev.currentTarget.elements.message?.blur()
                    }}
                    className="flex justify-end items-center relative"
                  >
                    <input
                      placeholder="Type your comment here"
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

            {post.comment.replies?.map((comment) => (
              <PostComment
                key={comment.message}
                comment={comment}
                addComment={addComment}
                addReaction={addCommentReaction}
              />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default PostCard

function addPoints(postId, points) {
  store.dispatch({
    type: 'redux',
    fn: (posts) => {
      const prev = posts.find((x) => x.id === postId)

      if (prev.sender.some((x) => x.id === me.id)) {
        prev.sender.find((x) => x.id === me.id).points = points
      } else
        prev.sender.push({
          points,
          ...me,
        })

      return { ...prev }
    },
  })
}

function addReaction(postId, emoji) {
  store.dispatch({
    type: 'redux',
    fn: (posts) => {
      const prev = posts.find((x) => x.id === postId)
      const myReaction = prev.reactions.find((x) => x.user.id === me.id)
      if (myReaction) {
        myReaction.emoji = emoji
      } else {
        prev.reactions.push({
          user: me,
          emoji,
        })
      }

      return { ...prev }
    },
  })
}

function addComment(commentId, message) {
  store.dispatch({
    type: 'redux',
    fn: (posts) => {
      let targetComment
      function findTargetComment(comment) {
        if (targetComment != null) return
        if (comment.id === commentId) {
          targetComment = comment
          return
        }

        comment.replies.forEach((x) => findTargetComment(x))
      }

      for (let post of posts) {
        if (targetComment != null) break

        findTargetComment(post.comment)
      }

      targetComment.replies.push(Comment(message, me))
    },
  })
}

function addCommentReaction(commentId, emoji) {
  store.dispatch({
    type: 'redux',
    fn: (prev) => {
      let targetComment
      function findTargetComment(comment) {
        if (targetComment != null) return
        if (comment.id === commentId) {
          targetComment = comment
          return
        }

        comment.replies.forEach((x) => findTargetComment(x))
      }

      for (let post of prev) {
        if (targetComment != null) break
        findTargetComment(post.comment)
      }

      const myReaction = targetComment.reactions.find((x) => x.user.id === me.id)
      if (myReaction) {
        myReaction.emoji = emoji
      } else
        targetComment.reactions.push({
          user: me,
          emoji,
        })

      return { ...prev }
    },
  })
}
