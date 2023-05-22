import React, { useEffect } from 'react'

const ImageSlider = () => {
  const bgs = ['bg-hero-slider1', 'bg-hero-slider2', 'bg-hero-slider3']
  const [counter, setCounter] = React.useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCounter((p) => (p + 1) % bgs.length)
    }, 2000)

    return () => clearInterval(id)
  }, [])

  const prevBg = bgs[(counter + bgs.length - 1) % bgs.length]
  const bg = bgs[counter]

  return (
    <div className="flex whitespace-nowrap overflow-x-hidden">
      <div
        key={'-' + counter}
        style={{ flexBasis: '100%' }}
        className={`flex-shrink-0 flex-grow w-full bg-center bg-no-repeat  rounded-lg px-8 pt-8 pb-10 ${prevBg} animate-slide-left`}
      >
        <p className="font-Lato font-black text-[25px] text-white leading-8	">
          Take our Survey <br /> & Earn High5 Points
        </p>
        <div className="mt-5">
          <button className="bg-[#292929] text-white font-Lato text-sm py-1 px-3">Take Now</button>
        </div>
      </div>

      <div
        key={counter}
        style={{ flexBasis: '100%' }}
        className={`flex-shrink-0 flex-grow w-full bg-center bg-no-repeat  rounded-lg px-8 pt-8 pb-10 ${bg} animate-slide-left`}
      >
        <p className="font-Lato font-black text-[25px] text-white leading-8	">
          Take our Survey <br /> & Earn High5 Points
        </p>
        <div className="mt-5">
          <button className="bg-[#292929] text-white font-Lato text-sm py-1 px-3">Take Now</button>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
