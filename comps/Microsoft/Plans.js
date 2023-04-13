import { useState } from "react";
import Image from "next/image";

const options = [
  "For Business",
  "For Enterprises"
]

const covered = [
  {
    key: "1",
    src: "/img/microsoft/products/Word.png",
    alt: "Word",
  },
  {
    key: "2",
    src: "/img/microsoft/products/Excel.png",
    alt: "Excel",
  },
  {
    key: "3",
    src: "/img/microsoft/products/Powerpoint.png",
    alt: "Powerpoint",
  },
  {
    key: "4",
    src: "/img/microsoft/products/Teams.png",
    alt: "Teams",
  },
  {
    key: "5",
    src: "/img/microsoft/products/outlook.png",
    alt: "Outlook",
  },
  {
    key: "6",
    src: "/img/microsoft/products/exchange.png",
    alt: "Exchange",
  },
  {
    key: "7",
    src: "/img/microsoft/products/sharepoint.png",
    alt: "SharePoint",
  },
  {
    key: "8",
    src: "/img/microsoft/products/onedrive.png",
    alt: "OneDrive",
  },
  {
    key: "9",
    src: "/img/microsoft/products/Access.png",
    alt: "Access",
  },
  {
    key: "10",
    src: "/img/microsoft/products/Publisher.png",
    alt: "Publisher",
  },
  {
    key: "11",
    src: "/img/microsoft/products/Intune.png",
    alt: "Intune",
  },
  {
    key: "12",
    src: "/img/microsoft/products/AIP.png",
    alt: "AIP",
  },
]

const forBuisness = [
  {
    key: "1",
    title: "Microsoft 365",
    plan: "Business Basic",
    price: "₹ 115/mo.",
    intro: "Web and mobile apps and services",
    covered: covered.filter((a, i) => i < 8),
    points: [
      "Web and mobile versions of Office apps only",
      "Chat, call, meet up to 300 attendees ",
      "1 TB of cloud storage per user",
      "Business-class email",
      "Standard security",
      "Anytime phone and web support",
    ]
  },
  {
    key: "2",
    title: "Microsoft 365",
    plan: "Business Standard",
    price: "₹ 600/mo.",
    intro: "Web and mobile apps and services",
    covered: covered.filter((a, i) => i < 10),
    points: [
      "Web and mobile versions of Office apps only",
      "Chat, call, meet up to 300 attendees ",
      "1 TB of cloud storage per user",
      "Business-class email",
      "Standard security",
      "Anytime phone and web support",
    ]
  },
  {
    key: "3",
    title: "Microsoft 365",
    plan: "Business Premium",
    price: "₹ 1250/mo.",
    intro: "Web and mobile apps and services",
    covered,
    points: [
      "Web and mobile versions of Office apps only",
      "Chat, call, meet up to 300 attendees ",
      "1 TB of cloud storage per user",
      "Business-class email",
      "Standard security",
      "Anytime phone and web support",
    ]
  },
]

function Card({
  title, plan, price,
  intro, points, covered,
  parentIn,
}) {
  return (
    <div className="flex flex-col bg-white">
      <div className="dfc items-center gap-4 p-6 bg-primary text-white rounded-md text-center sticky top-20">
        <p className="text-[13px] md:text-[15px] xl:text-[17px] font-medium">{title}</p>
        <p className="text-lg md:text-xl xl:text-2xl font-semibold">{plan}</p>
        <p className="text-3xl md:text-4xl xl:text-[40px] font-bold">{price}</p>

        <button className="mt-2 text-[13px] md:text-[15px] xl:text-[17px] font-medium bg-[#001252] text-white shadow-[0_4px_4px_0_#00000040]">
          Order Now
        </button>
      </div>

      <div className="my-6 px-5 text-[13px] md:text-[15px] xl:text-[17px] text-[#656565E3]">
        {intro}
      </div>

      <div className="grid grid-cols-4 mdb:grid-rows-3 gap-5 px-5">
        {
          covered.map((c, i) => (
            <div
              key={c.key}
              className={`dfc items-center gap-1 text-xs font-medium text-[#888585] ${parentIn === 1 && i === 8 ? "col-start-2" : ""}`}
            >
              <Image
                src={c.src}
                alt={c.alt}
                width={36}
                height={36}
              />
              {c.alt}
            </div>
          ))
        }
        {
          parentIn === 0 &&
          <div className="hidden md:block"></div>
        }
      </div>

      <ul className="my-6 px-5">
        {
          points.map((p, i) => (
            <li
              key={i}
              className="flex gap-2 lg:gap-4 mb-4 text-xs md:text-sm xl:text-base text-[#656565]"
            >
              <span className="w-2 h-2 mdb:w-3 mdb:h-3 mt-1 mdb:mt-1.5 shrink-0 border-2 border-primary rounded-full"></span>
              {p}
            </li>
          ))
        }
      </ul>

      <button className="block m-auto mb-6 text-xs md:text-sm xl:text-base">
        Order Now
      </button>
    </div>
  )
}

function Plans() {
  const [active, setActive] = useState("For Business")

  return (
    <div className="pt-8 bg-light">
      <h2 className="py-6 text-2xl md:text-3xl xl:text-[38px] font-bold text-[#202020] text-center">
        Price Plans
      </h2>

      <div className="w-fit mb-8 mx-auto py-[3px] px-1.5 bg-[#3C68FF2E] rounded-[5px]">
        {
          options.map(o => (
            <button
              key={o}
              onClick={() => setActive(o)}
              className={`not-theme px-6 py-2 first:mr-1 text-[13px] md:text-[15px] xl:text-[17px] font-medium ${o === active ? "bg-[#3C68FF] text-white" : "text-[#151515D4] hover:bg-[#3C68FF2E]"} rounded-[5px]`}
            >
              {o}
            </button>
          ))
        }
      </div>

      <div className="grid mdb:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto px-6 pb-8">
        {forBuisness.map((f, i) => <Card {...f} parentIn={i} />)}
      </div>
    </div>
  )
}

export default Plans