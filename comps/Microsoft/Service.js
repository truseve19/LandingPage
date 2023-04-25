import Image from "next/image";

const middle = "left-1/2 -translate-x-1/2 whitespace-nowrap"

const list = [
  {
    title: "Office Applications",
    wrapperCls: "w-full",
    titleClass: "right-8",
    list: [
      {
        src: "/img/microsoft/services/Word.png",
        alt: "Word",
        width: 86,
        height: 86,
      },
      {
        src: "/img/microsoft/services/Excel.png",
        alt: "Excel",
        width: 86,
        height: 86,
      },
      {
        src: "/img/microsoft/services/Powerpoint.png",
        alt: "Powerpoint",
        width: 86,
        height: 86,
      },
      {
        src: "/img/microsoft/services/Outlook.png",
        alt: "Outlook",
        width: 86,
        height: 86,
      },
      {
        src: "/img/microsoft/services/Access.png",
        alt: "Access",
        width: 86,
        height: 86,
      },
      {
        src: "/img/microsoft/services/Onenote.png",
        alt: "OneNote",
        width: 86,
        height: 86,
      },
      {
        src: "/img/microsoft/services/Publisher.png",
        alt: "Publisher",
        width: 86,
        height: 86,
      },
    ]
  },
  {
    title: <>
      <p className="xs:hidden">Enterprises & Team</p>
      <p className="hidden xs:block">Enterprises & Team collaboration</p>
    </>,
    wrapperCls: "w-full",
    titleClass: "right-8",
    list: [
      {
        src: "/img/microsoft/services/Sharepoint.png",
        alt: "Sharepoint",
        width: 86,
        height: 86,
      },
      {
        src: "/img/microsoft/services/Teams.png",
        alt: "Teams",
        width: 86,
        height: 86,
      },
      {
        src: "/img/microsoft/services/Yammer.png",
        alt: "Yammer",
        width: 86,
        height: 86,
      },
    ]
  },
  {
    title: <>
      <p className="xs:hidden">Business Application</p>
      <p className="hidden xs:block">Business Application Platform</p>
    </>,
    wrapperCls: "w-full",
    titleClass: "left-8",
    list: [
      {
        src: "/img/microsoft/services/PowerApps.png",
        alt: "Power Apps",
        width: 86,
        height: 86,
      },
      {
        src: "/img/microsoft/services/Flow.png",
        alt: "Flow",
        width: 86,
        height: 86,
      },
      {
        src: "/img/microsoft/services/Forms.png",
        alt: "Forms",
        width: 86,
        height: 86,
      },
    ]
  },
  {
    title: "Analytics",
    wrapperCls: "w-full",
    titleClass: "right-8",
    list: [
      {
        src: "/img/microsoft/services/My-Analytics.png",
        alt: "My Analytics",
        width: 86,
        height: 86,
      },
      {
        src: "/img/microsoft/services/Power-BI.png",
        alt: "Power of BI",
        width: 86,
        height: 86,
      },
    ]
  },
  {
    title: "Email & Calendaring",
    wrapperCls: "w-full",
    titleClass: "left-0.5 xs:left-4 md:left-8 xs:whitespace-nowrap",
    list: [
      {
        src: "/img/microsoft/services/Exchange.png",
        alt: "Exchange",
        width: 86,
        height: 86,
      },
      {
        src: "/img/microsoft/services/Calendar.png",
        alt: "Calendar",
        width: 86,
        height: 86,
      },
    ]
  },
  {
    title: "Project Mgmt.",
    wrapperCls: "w-2/4",
    titleClass: middle,
    list: [
      {
        src: "/img/microsoft/services/Project.png",
        alt: "Project",
        width: 86,
        height: 86,
      },
    ]
  },
  {
    title: "Search",
    wrapperCls: "w-1/4",
    titleClass: middle,
    list: [
      {
        src: "/img/microsoft/services/Delver.png",
        alt: "Delve",
        width: 86,
        height: 86,
      },
    ]
  },
  {
    title: "File Storage",
    wrapperCls: "w-1/4",
    titleClass: middle,
    list: [
      {
        src: "/img/microsoft/services/One-Drive.png",
        alt: "OneDrive",
        width: 86,
        height: 86,
      },
    ]
  },
  {
    title: "Business",
    wrapperCls: "w-1/4",
    titleClass: middle,
    list: [
      {
        src: "/img/microsoft/services/Visio.png",
        alt: "Visio Online",
        width: 86,
        height: 86,
      },
    ]
  },
  {
    title: "Employees",
    wrapperCls: "w-1/4",
    titleClass: middle,
    list: [
      {
        src: "/img/microsoft/services/People.png",
        alt: "People",
        width: 86,
        height: 86,
      },
    ]
  },
].map((s, i) => ({
  ...s,
  key: i,
  list: s.list.map((l, li) => ({ ...l, key: li }))
}))

function Card({
  title = "", list = [],
  wrapperCls = "", titleClass = "",
}) {
  return (
    <div className={`df justify-evenly pt-5 sm:pt-7 pb-2 text-[10px] sm:text-xs md:text-[13px] mdb:text-sm xl:text-base shadow-[0_4px_18px_0_#5D5FEF8C] rounded-lg sm:rounded-2xl md:rounded-3xl relative bg-white ${wrapperCls}`}>
      <div className={`px-1.5 xs:px-2 sm:px-3 md:px-4 mdb:px-5 lg:px-7 py-1 absolute top-0 -translate-y-1/2 bg-primary text-white rounded-sm sm:rounded-[5px] ${titleClass}`}>
        {title}
      </div>

      {
        list.map(a => (
          <div
            key={a.key}
            className="dfc items-center gap-1 mt-auto font-medium text-[#8B8B8B]"
          >
            <Image
              {...a}
              className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 mdb:w-16 mdb:h-16 lg:w-20 lg:h-20 xl:w-[86px] xl:h-[86px]"
            />

            {a.alt}
          </div>
        ))
      }
    </div>
  )
}

function Service() {
  return (
    <div className="p-8 pt-16 bg-light">
      <h2 className="dc xs:gap-4 mb-4 text-xl xs:text-2xl md:text-3xl xl:text-[40px] font-bold text-center">
        <Image
          src="/img/microsoft/services/Microsoft.png"
          alt=""
          width={56}
          height={56}
          className="w-6 h-6 xs:w-8 xs:h-8 md:w-11 md:h-11 xl:w-[54px] xl:h-[54px]"
        />
        Microsoft 365 Services
      </h2>

      <div className="mb-12 text-[13px] md:text-[15px] xl:text-[17px] font-medium text-[#040404] text-center">
        Our team helps you select the most suitable M365 plan for your business needs, ensuring a seamless and <br className="hidden md:block" />
        effortless onboarding experience.
      </div>

      <div className="max-w-[1200px] -mx-4 md:mx-auto">
        <div className="flex justify-center gap-x-4 md:gap-x-8">
          <Card {...list[0]} />
        </div>

        <div className="flex justify-center gap-x-4 md:gap-x-8 xs:max-w-[97%] sm:max-w-[95%] mdb:max-w-[90%] mx-auto my-10 sm:my-14 md:my-16 lg:my-[70px]">
          {list.filter((a, i) => i > 0 && i < 3).map(a => <Card {...a} />)}
        </div>

        <div className="flex justify-center gap-x-4 md:gap-x-8 xs:max-w-[90%] sm:max-w-[88%] mdb:max-w-[80%] mx-auto my-10 sm:my-14 md:my-16 lg:my-[70px]">
          {list.filter((a, i) => i > 2 && i < 6).map(a => <Card {...a} />)}
        </div>

        <div className="flex justify-center gap-x-4 md:gap-x-8 xs:max-w-[85%] sm:max-w-[80%] mdb:max-w-[70%] mx-auto">
          {list.filter((a, i) => i > 5).map(a => <Card {...a} />)}
        </div>
      </div>
    </div>
  )
}

export default Service