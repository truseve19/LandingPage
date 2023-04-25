import { useEffect, useRef, useState } from "react";
import { data1, data2, data3, data4, data5, data6, dataMid } from './data';
import SpecialBox from "./SpecialBox";
import Animater from "./Animater";

function Services() {
  const [selected, setSelected] = useState(0)
  const timerRef = useRef()

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSelected(p => p === 3 ? 0 : p + 1)
    }, 3000)

    return () => clearInterval(timerRef.current)
  }, [])

  const set = () => {
    timerRef.current = setInterval(() => {
      setSelected(p => p === 3 ? 0 : p + 1)
    }, 3000)
  }

  return (
    <section className="bg-primary text-white relative overflow-x-hidden">
      <img
        className="absolute top-0 inset-x-0"
        src="/img/home/shape.png"
        alt=""
      />

      <h2 className="theme-h2 mt-2 md:mt-6 lg:mt-12 mb-4 md:mb-8 lg:mb-12">
        Our Technology Partners
      </h2>

      <div
        onMouseEnter={() => clearInterval(timerRef.current)}
        onMouseLeave={set}
        className="service-grid grid gap-2 xs:gap-4 sm:gap-6 w-fit mx-auto p-6 sm:p-12 rounded-2xl md:rounded-3xl lg:rounded-[35px] border border-[#98F9FF]"
      >
        <Animater selected={selected} data={data1} />
        <Animater selected={selected} data={data2} wrapperCls="col-span-2" />
        <Animater selected={selected} data={data3} />

        <SpecialBox selected={selected} />

        <Animater selected={selected} data={data4} />
        <Animater selected={selected} data={data5} />
        <Animater selected={selected} data={dataMid} wrapperCls="md:hidden" />
        <Animater selected={selected} data={data6} wrapperCls="col-span-2" />
      </div>

      <div
        onMouseEnter={() => clearInterval(timerRef.current)}
        onMouseLeave={set}
        className="dc w-fit mx-auto gap-4 mt-4 xs:mt-6 md:mt-8"
      >
        {
          [0, 1, 2, 3].map(a => (
            <button
              key={a}
              className={`h-3 p-0 rounded-full transition-all duration-500 ${selected === a ? "w-5 bg-[#98F9FF]" : "w-3 bg-white opacity-80 hover:opacity-100"} hover:bg-[#98F9FF]`}
              onClick={() => setSelected(a)}
            ></button>
          ))
        }
      </div>
    </section>
  )
}

export default Services