import * as React from 'react'
import { AiOutlineLoading } from 'react-icons/ai'

export default function GifPicker({ ...props }) {
  const [gifs, setGifs] = React.useState(null)
  const [text, setText] = React.useState('')
  const [loading, setLoading] = React.useState('')

  React.useEffect(() => {
    setLoading('gifs')
    fetch(
      'https://api.giphy.com/v1/gifs/trending?api_key=Wfvwu8YYvWGy2rxlXFs7ad6h987KnSp1&limit=24&rating=g'
    )
      .then((r) => r.json())
      .then((r) => {
        setGifs(r.data)
        setLoading('')
      })
  }, [])

  const randomHeights = [36, 24, 36, 48]

  return (
    <div
      id={props.id}
      className="rounded-md shadow-md border border-translucent px-4 bg-white absolute overflow-scroll h-[25rem]"
    >
      <form
        className="mt-4 flex gap-4"
        onSubmit={(e) => {
          e.preventDefault()
          const text = e.currentTarget.elements.query.value

          setLoading('gifs')
          fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=Wfvwu8YYvWGy2rxlXFs7ad6h987KnSp1&q=${text}&limit=24&offset=0&rating=g&lang=en`
          )
            .then((r) => r.json())
            .then((r) => {
              setGifs(r.data)
              setLoading('')
            })
        }}
      >
        <input
          name="query"
          className="block border flex-1 w-full rounded h-full focus:outline-primary px-1"
          placeholder="Search gifs"
        />

        <button className="rounded bg-primary text-white w-24" type="submit">
          {loading === 'gifs' ? (
            <AiOutlineLoading fontSize="inherit" className="mx-auto animate-spin" />
          ) : (
            'Search'
          )}
        </button>
      </form>

      <div className="columns-2 gap-4">
        {gifs == null
          ? Array(10)
              .fill(0)
              .map(() => randomHeights[Math.round(Math.random() * randomHeights.length)])
              .map((height, i) => (
                <button key={i} className="w-[200px] pt-4 block">
                  {console.log(height)}
                  <div
                    style={{ height: 0.25 * height + 'rem' }}
                    className="bg-translucent hover:bg-primary-400 rounded"
                  ></div>
                </button>
              ))
          : gifs.map((gifO) => (
              <button
                key={gifO.id}
                className="w-[200px] pt-4 block"
                onClick={() => props.onClick(gifO.images.original.url)}
              >
                <div className="bg-translucent">
                  <img
                    src={gifO.images.fixed_width.url}
                    style={{ height: gifO.images.fixed_width.height + 'px' }}
                    className="w-full rounded overflow-hidden"
                  />
                </div>
              </button>
            ))}
      </div>
    </div>
  )
}
