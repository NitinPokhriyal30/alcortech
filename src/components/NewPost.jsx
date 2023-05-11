import * as React from 'react'

export default function NewPost({ ...props }) {
  const [form, setForm] = React.useState({
    points: 30,
    recipients: [],
    hashtags: [],
    message: '',
  })

  const users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      id: 2,
      firstName: 'Lisa',
      lastName: 'Clinton',
    },
    {
      id: 3,
      firstName: 'Neha',
      lastName: 'Bhati',
    },
  ]

  const hashtags = ['OneTeam', 'TeamBuilding', 'Vision', 'Culture', 'Training']

  const user = {
    points: 260,
  }

  return (
    <div className="">
      <div className="bg-primary text-white text-sm rounded-t-lg py-2 px-4">
        <ul className="flex items-center divide-x">
          {/* points button */}

          <li className="group px-4">
            <span>+ Points</span>
            <div className="p-2 rounded-full absolute shadow bg-white text-black gap-2 hidden group-hover:flex">
              {[10, 20, 30, 40, 50].map((point) => (
                <button
                  key={point}
                  type="button"
                  className={`w-7 h-7 flex items-center justify-center rounded-full hover:bg-primary  hover:text-white ${
                    form.points === point ? 'bg-primary text-white' : ''
                  }`}
                  onClick={() => {
                    setForm((prev) => ({ ...prev, points: point }))
                  }}
                >
                  {point}
                </button>
              ))}
            </div>
          </li>

          <li className="group px-4">
            <span className="">@ Recipients</span>

            <div className="absolute shadow rounded divide-y bg-white text-black hidden group-hover:block">
              {users.map((user) => {
                const checked = form.recipients.findIndex((x) => x.id === user.id) !== -1
                return (
                  <button
                    className={`w-full block px-4 py-1 ${checked ? 'bg-translucent' : ''}`}
                    key={user.id}
                    type="button"
                    onClick={() => {
                      setForm((prev) => {
                        const checked = form.recipients.findIndex((x) => x.id === user.id) !== -1
                        if (checked) {
                          prev.recipients = prev.recipients.filter((x) => x.id !== user.id)
                        } else {
                          prev.recipients.push(user)
                        }

                        return { ...prev }
                      })
                    }}
                  >
                    {user.firstName} {user.lastName}
                  </button>
                )
              })}
            </div>
          </li>

          <li className="group px-4">
            <span># Hashtag</span>
            <div className="absolute bg-white shadow text-black flex-col rounded divide-y hidden group-hover:flex">
              {hashtags.map((tag, i) => {
                const checked = form.hashtags.includes(tag)
                return (
                  <button
                    key={tag}
                    type="button"
                    className={`text-left px-4 py-1 ${checked ? 'bg-translucent' : ''}`}
                    onClick={() => {
                      setForm((prev) => {
                        const checked = prev.hashtags.includes(tag)
                        if (checked) {
                          prev.hashtags = prev.hashtags.filter((x) => x !== tag)
                        } else {
                          prev.hashtags.push(tag)
                        }

                        return { ...prev }
                      })
                    }}
                  >
                    #{tag}
                  </button>
                )
              })}
            </div>
          </li>

          <li style={{ borderWidth: 0 }} className="ml-auto">
            You Have {user.points} points to give
            <span className="group ml-2 w-4 h-4 bg-white text-black inline-flex items-center justify-center rounded-full">
              <span>?</span>
              <p className="absolute hidden group-hover:block">
                You monthly allowance will refresh on 1st March. You have 6 days to spend 160
                points.
              </p>
            </span>
          </li>
        </ul>
      </div>

      {/* text field */}
      <div className="bg-white px-8 py-10 text-gray-400">
        <div>
          +{form.points}{' '}
          {form.recipients.map((user) => (
            <button key={user.id} type="button">
              @{user.firstName} {user.lastName}
            </button>
          ))}
          {form.hashtags.map((tag) => (
            <button key={tag} type="button">
              #{tag}
            </button>
          ))}
        </div>

        <div>
          <textarea
            spellCheck={false}
            className="resize-none h-20 border-b block w-full outline-none focus:border-primary focus:border-b-2 transition-all"
            placeholder="Type Here..."
            onChange={(ev) =>
              setForm((prev) => ({ ...prev, message: ev.target.value.substring(0, 270) }))
            }
            value={form.message}
          ></textarea>
        </div>

        {/* footer */}
        <div className="flex pt-3">
          <button
            type="submit"
            className=" ml-auto bg-primary text-white px-4 w-full max-w-[6rem] rounded-sm"
          >
            Give
          </button>
        </div>
      </div>
    </div>
  )
}
