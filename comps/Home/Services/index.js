import { useEffect, useRef, useState } from "react";
import { data1, data2, data3, data4, data5, data6, dataMid } from './data';
import SpecialBox from "./SpecialBox";
import Animater from "./Animater";

function Services() {
  const [selected, setSelected] = useState(3)
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
        Our key services
      </h2>

      <div
        className="service-grid grid gap-4 sm:gap-6 w-fit mx-auto p-6 sm:p-12 rounded-2xl md:rounded-[35px] border border-[#98F9FF]"
        onMouseEnter={() => clearInterval(timerRef.current)}
        onMouseLeave={set}
      >
        <Animater selected={selected} data={data1} />
        <Animater selected={selected} data={data2} wrapperCls="col-span-2" />
        <Animater selected={selected} data={data3} />

        <SpecialBox selected={selected} />

        <Animater selected={selected} data={data4} />
        <Animater selected={selected} data={data5} />
        <Animater selected={selected} data={dataMid} wrapperCls="xs:hidden" />
        <Animater selected={selected} data={data6} wrapperCls="col-span-2" />
      </div>
    </section>
  )
}

export default Services