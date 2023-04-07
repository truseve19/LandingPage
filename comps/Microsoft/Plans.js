import { useState } from "react";

const options = [
  "For Business",
  "For Enterprises"
]

const forBuisness = [
  {
    key: "1",
    title: "Microsoft 365",
    plan: "Business Basic",
    price: "₹ 111/mo.",
    intro: "Web and mobile apps and services",
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
    plan: "Business Basic",
    price: "₹ 111/mo.",
    intro: "Web and mobile apps and services",
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
    plan: "Business Basic",
    price: "₹ 111/mo.",
    intro: "Web and mobile apps and services",
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
  intro, points
}) {
  return (
    <div className="bg-white">
      <div className="dfc items-center gap-4 p-6 bg-primary text-white rounded-md text-center sticky top-20">
        <p className="text-[17px] font-medium">{title}</p>
        <p className="text-[27px] font-bold">{plan}</p>
        <p className="text-[47px] font-extrabold">{price}</p>

        <button className="mt-2 text-[17px] font-medium bg-[#001252] text-white shadow-[0_4px_4px_0_#00000040]">
          Order Now
        </button>
      </div>

      <div className="mt-6 px-5 text-[17px] font-medium text-[#656565E3]">
        {intro}
      </div>

      <ul className="my-8 px-5">
        {
          points.map((p, i) => (
            <li
              key={i}
              className="flex gap-4 mb-4 font-medium text-[#656565]"
            >
              <span className="w-3 h-3 mt-1.5 shrink-0 border-2 border-primary rounded-full"></span>
              {p}
            </li>
          ))
        }
      </ul>

      <button className="block mx-auto">
        Order Now
      </button>
    </div>
  )
}

function Plans() {
  const [active, setActive] = useState("For Business")

  return (
    <div className="bg-light">
      <h2 className="my-6 text-[38px] font-bold text-[#202020] text-center">
        Price Plans
      </h2>

      <div className="w-fit mb-8 mx-auto py-[3px] px-1.5 bg-[#3C68FF2E] rounded-[5px]">
        {
          options.map(o => (
            <button
              key={o}
              onClick={() => setActive(o)}
              className={`not-theme px-6 py-2 text-[17px] font-medium ${o === active ? "bg-[#3C68FF] text-white" : "text-[#151515D4] hover:bg-[#3C68FF2E]"} rounded-[5px]`}
            >
              {o}
            </button>
          ))
        }
      </div>

      <div className="grid grid-cols-3 gap-8 justify-center max-w-5xl mx-auto mb-8">
        {
          forBuisness.map(f => <Card {...f} />)
        }
      </div>
    </div>
  )
}

export default Plans