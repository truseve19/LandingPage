import { useEffect, useState, useRef } from "react";
import useObserver from "../../hooks/useObserver";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Email Migration",
    desc: "Email migration made hassle-free by providing expert services that ensure seamless transfer of email data between platforms. Our team guarantees a smooth transition with minimum downtime, making it stress-free for both individuals and businesses.",
  },
  {
    id: 2,
    title: "Cloud Migration",
    desc: "Truseve offers customized cloud migration services for seamless transition to cloud environment, including data and application migration, and optimizing performance, security, and scalability.",
  },
  {
    id: 3,
    title: "On-Premises to Cloud Migration",
    desc: "Are you tired of managing your on-premises software? Truseve can help you migrate to a cloud-based platform seamlessly. Our expert team ensures a hassle-free transition.",
  },
]

function Migration() {
  const [observerRef, isVisible] = useObserver()
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(1)
  const timerRef = useRef()

  useEffect(() => {
    if (isVisible) {
      timerRef.current = setTimeout(() => {
        setProgress(p => p >= 8000 ? 1000 : p + 1000)
      }, 1000)
    } else {
      clearTimeout(timerRef?.current)
    }

    return () => clearTimeout(timerRef?.current)
  }, [isVisible, progress])

  useEffect(() => {
    if (progress >= 8000) {
      setActive(p => p < 3 ? p + 1 : 1)
    }
  }, [progress])

  const createNewTimer = (id) => {
    setActive(id)
    setProgress(0)
  }

  return (
    <section className="bg-light">
      <div className="mb-4 md:mb-8 lg:mb-12">
        <h2 className="theme-h2 mb-2">
          Migration made easy with Expert assistance
        </h2>

        <p className="text-sm md:text-base lg:text-lg xl:text-xl font-medium text-[#494949] text-center">
          Three migration techniques based on application and user needs.
        </p>
      </div>

      <div className="grid mdb:grid-cols-2 gap-6 px-5 py-8 max-w-lg md:max-w-xl mdb:max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto bg-white rounded-3xl">
        <div className="dc p-4 h-60 xs:h-80 md:h-96 mdb:h-auto mdb:order-1 relative rounded-3xl mdb:rounded-l-none overflow-hidden">
          <Image
            src="/img/home/migration-1.png"
            alt=""
            width={546}
            height={375}
            className="z-[1]"
          />

          <img
            src="./img/home/migration.webp"
            alt=""
            className="migrabition-bg-img absolute inset-0 w-full h-full"
          />
        </div>

        <div className="grid gap-4" ref={observerRef}>
          {
            data.map(d => (
              <div
                className={`migration-content-left px-6 py-4 relative border-2 rounded-2xl overflow-hidden cursor-pointer ${d.id === active ? "active border-primary" : "border-transparent"}`}
                onClick={() => createNewTimer(d.id)}
                key={d.id}
              >
                <strong className="text-sm md:text-base lg:text-lg xl:text-[22px] font-semibold">{d.title}</strong>
                {d.id === active && <p className="my-2 text-xs md:text-sm lg:text-base xl:text-lg text-[#6C6C6C]">{d.desc}</p>}
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Migration