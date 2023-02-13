import { useEffect, useState, useRef } from "react";
import useObserver from "../../hooks/useObserver";

const data = [
  {
    id: 1,
    title: "CUT OVER MIGRATION",
    desc: "We seamlessly transfer all your data, email accounts and features,  whether they are on-site or in the cloud, to Office 365 all at once. This method is perfect for businesses with limited amount of data to migrate.",
  },
  {
    id: 2,
    title: "STAGED MIGRATION",
    desc: "To ensure a smooth transition, we divide the migration process into multiple phases, moving solutions and their associated data in manageable chunks. This method is ideal for businesses with large amounts of complex data, custom solutions, integrations, and diverse content and features.",
  },
  {
    id: 3,
    title: "HYBRID MIGRATION",
    desc: "We divide the migrated data and services between your on-site and cloud systems, making it easy to work in both environments. This hybrid approach is perfect for companies that are not ready to fully move to the cloud due to compliance or internal policies.",
  },
  {
    id: 4,
    title: "DirSync and Single Sign ON (SSO)",
    desc: "We move all your data to the cloud while keeping your Active Directories on-site, this migration method enables businesses to take advantage of cloud collaboration while maintaining full control over their Office 365 users.",
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
      setActive(p => p < 4 ? p + 1 : 1)
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

        <p className="text-xl font-semibold text-[#494949] text-center">
          Four migration techniques based on application and user needs.
        </p>
      </div>

      <div className="grid mdb:grid-cols-2 gap-6 px-5 py-8 max-w-lg md:max-w-2xl mdb:max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto bg-white rounded-3xl">
        <div className="migration-bg max-mdb:h-40 mdb:order-1 mdb:rounded-r-2xl"></div>

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