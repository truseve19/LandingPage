import Image from "next/image";

const middle = "left-1/2 -translate-x-1/2 whitespace-nowrap"

const list = [
  {
    title: "Office Applications",
    wrapperCls: "px-20",
    titleClass: "right-8",
    list: [
      {
        src: "/img/microsoft/service/Word.png",
        alt: "Word",
        width: 88,
        height: 88,
      },
      {
        src: "/img/microsoft/service/Excel.png",
        alt: "Excel",
        width: 88,
        height: 88,
      },
      {
        src: "/img/microsoft/service/Powerpoint.png",
        alt: "Powerpoint",
        width: 88,
        height: 88,
      },
      {
        src: "/img/microsoft/service/outlook.png",
        alt: "Outlook",
        width: 88,
        height: 88,
      },
      {
        src: "/img/microsoft/service/Access.png",
        alt: "Access",
        width: 88,
        height: 88,
      },
      {
        src: "/img/microsoft/service/onenote.png",
        alt: "OneNote",
        width: 88,
        height: 88,
      },
      {
        src: "/img/microsoft/service/Publisher.png",
        alt: "Publisher",
        width: 88,
        height: 88,
      },
    ]
  },
  {
    title: "Enterprise & Team collaboration",
    wrapperCls: "px-20",
    titleClass: "right-8",
    list: [
      {
        src: "/img/microsoft/service/sharepoint.png",
        alt: "Sharepoint",
        width: 88,
        height: 88,
      },
      {
        src: "/img/microsoft/service/Teams.png",
        alt: "Teams",
        width: 88,
        height: 88,
      },
      {
        src: "/img/microsoft/service/Yammer.png",
        alt: "Yammer",
        width: 74,
        height: 74,
      },
    ]
  },
  {
    title: "Business Application Platform",
    wrapperCls: "px-20",
    titleClass: "left-8",
    list: [
      {
        src: "/img/microsoft/service/powerapp.png",
        alt: "Power Apps",
        width: 67,
        height: 67,
      },
      {
        src: "/img/microsoft/service/flow.png",
        alt: "Flow",
        width: 88,
        height: 88,
      },
      {
        src: "/img/microsoft/service/forms.png",
        alt: "Forms",
        width: 77,
        height: 77,
      },
    ]
  },
  {
    title: "Analytics",
    wrapperCls: "px-20",
    titleClass: "right-8",
    list: [
      {
        src: "/img/microsoft/service/MyAnalytics.png",
        alt: "My Analytics",
        width: 81,
        height: 81,
      },
      {
        src: "/img/microsoft/service/Power-BI.png",
        alt: "Power of BI",
        width: 74,
        height: 74,
      },
    ]
  },
  {
    title: "Email & Calendaring",
    wrapperCls: "px-20",
    titleClass: "left-8",
    list: [
      {
        src: "/img/microsoft/service/exchange.png",
        alt: "Exchange",
        width: 79,
        height: 79,
      },
      {
        src: "/img/microsoft/service/Calendar.png",
        alt: "Calendar",
        width: 65,
        height: 65,
      },
    ]
  },
  {
    title: "Project Mgmt.",
    wrapperCls: "px-12",
    titleClass: middle,
    list: [
      {
        src: "/img/microsoft/service/Project.png",
        alt: "Project",
        width: 75,
        height: 66,
      },
    ]
  },
  {
    title: "Search",
    wrapperCls: "px-12",
    titleClass: middle,
    list: [
      {
        src: "/img/microsoft/service/Delve.png",
        alt: "Delve",
        width: 77,
        height: 67,
      },
    ]
  },
  {
    title: "File Storage",
    wrapperCls: "px-12",
    titleClass: middle,
    list: [
      {
        src: "/img/microsoft/service/onedrive.png",
        alt: "OneDrive",
        width: 88,
        height: 88,
      },
    ]
  },
  {
    title: "Small Business",
    wrapperCls: "px-12",
    titleClass: middle,
    list: [
      {
        src: "/img/microsoft/service/Visio.png",
        alt: "Visio Online",
        width: 80,
        height: 76,
      },
    ]
  },
  {
    title: "Employees",
    wrapperCls: "px-12",
    titleClass: middle,
    list: [
      {
        src: "/img/microsoft/service/People.png",
        alt: "People",
        width: 69,
        height: 69,
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
    <div className={`df justify-around gap-20 w-fit pt-7 pb-2 shadow-[0_4px_18px_0_#5D5FEF8C] rounded-[25px] relative bg-white ${wrapperCls}`}>
      <div className={`px-7 py-1 absolute top-0 -translate-y-1/2 bg-primary text-white rounded-[5px] ${titleClass}`}>
        {title}
      </div>

      {
        list.map(a => (
          <div
            key={a.key}
            className="dfc items-center gap-1 mt-auto text-xs md:text-sm xl:text-base font-medium text-[#8B8B8B]"
          >
            <Image {...a} />

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
      <h2 className="mb-4 text-2xl md:text-3xl xl:text-[40px] font-bold text-center">
        Microsoft 365 Services
      </h2>

      <div className="mb-12 text-[13px] md:text-[15px] xl:text-[17px] font-medium text-[#040404] text-center">
        Our team helps you select the most suitable MS365 plan for your business needs, ensuring a seamless and <br />
        effortless onboarding experience.
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-[70px] max-w-[1200px] mx-auto">
        {list.map(c => <Card {...c} />)}
      </div>
    </div>
  )
}

export default Service