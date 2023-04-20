import { useState } from "react";
import Image from "next/image";

import OrderNow from "../Modals/OrderNow";

const covered = [
  {
    id: 1,
    title: "Microsoft 365 Apps",
    para: "Unleash your best ideas, get things done, and stay connected on the go.",
    list: [
      {
        key: 1,
        src: "/img/microsoft/products/Word.png",
        alt: "Word",
      },
      {
        key: 2,
        src: "/img/microsoft/products/Excel.png",
        alt: "Excel",
      },
      {
        key: 3,
        src: "/img/microsoft/products/Powerpoint.png",
        alt: "Powerpoint",
      },
      {
        key: 4,
        src: "/img/microsoft/services/Onenote.png",
        alt: "Onenote",
      },
      {
        key: 5,
        src: "/img/microsoft/products/Publisher.png",
        alt: "Publisher",
      },
      {
        key: 6,
        src: "/img/microsoft/products/Access.png",
        alt: "Access",
      },
    ],
  },
  {
    id: 2,
    title: "Email and calendar",
    para: "Connect, stay organized, and manage your time with business-class email, calendaring, and contacts all in one place.",
    list: [
      {
        key: 7,
        src: "/img/microsoft/products/outlook.png",
        alt: "Outlook",
      },
      {
        key: 8,
        src: "/img/microsoft/products/exchange.png",
        alt: "Exchange",
      },
      {
        key: 9,
        src: "/img/microsoft/products/exchange.png",
        alt: "Exchange",
      },
    ],
  },
  {
    id: 3,
    title: "Meetings and voice",
    para: "Deliver elevated meeting experiences with sophisticated call functionality and a central hub for meetings, chat, content, and calling.",
    list: [
      {
        key: 10,
        src: "/img/microsoft/products/Teams.png",
        alt: "Teams",
      },
    ],
  },
  {
    id: 4,
    title: "Device and app management",
    para: "Help users be productive wherever they are while keeping corporate information secure. Flexible management and powerful security solutions let you deliver protected mobile experiences on any device.",
    className: "mdb:min-h-[388px]",
    list: [
      {
        key: 11,
        src: "/img/microsoft/services/Window.png",
        alt: "Windows",
      },
      {
        key: 12,
        alt: "Windows Autopilot, fine-tuned user experience, and Universal Print",
      },
      {
        key: 13,
        alt: "Microsoft 365 Admin Center",
      },
      {
        key: 14,
        alt: "Microsoft Intune",
      },
      {
        key: 15,
        alt: "Microsoft Endpoint Configuration Manager",
      },
      {
        key: 16,
        alt: "Windows Autopatch",
      },
    ],
  },
  {
    id: 5,
    title: "Social and intranet",
    para: "Connect and engage across your organization with an intelligent, mobile intranet and enterprise social networking.",
    list: [
      {
        key: 17,
        src: "/img/microsoft/products/sharepoint.png",
        alt: "SharePoint",
      },
      {
        key: 18,
        src: "/img/microsoft/services/Yammer.png",
        alt: "Yammer",
      },
      {
        key: 19,
        src: "/img/microsoft/services/VivaConnections.png",
        alt: "Viva Connections",
      },
      {
        key: 20,
        src: "/img/microsoft/services/VivaEngage.png",
        alt: "Viva Engage",
      },
    ],
  },
  {
    id: 6,
    title: "Files and content",
    para: "Access files from any device, at any time. Engage with intelligent video and create visually striking content in minutes.",
    list: [
      {
        key: 21,
        src: "/img/microsoft/services/One-Drive.png",
        alt: "One Drive",
      },
      {
        key: 22,
        src: "/img/microsoft/services/Stream.png",
        alt: "Stream",
      },
      {
        key: 23,
        src: "/img/microsoft/services/Sway.png",
        alt: "Sway",
      },
      {
        key: 24,
        src: "/img/microsoft/services/Lists.png",
        alt: "Lists",
      },
      {
        key: 25,
        src: "/img/microsoft/services/Forms.png",
        alt: "Forms",
      },
      {
        key: 26,
        src: "/img/microsoft/services/Visio.png",
        alt: "Visio",
      },
    ],
  },
  {
    id: 7,
    title: "Work management",
    para: "Efficiently manage work across individuals, teams, and organizations. Create and automate your business processes.",
    list: [
      {
        key: 27,
        src: "/img/microsoft/services/Planner.png",
        alt: "Planner",
      },
      {
        key: 28,
        src: "/img/microsoft/services/PowerApps.png",
        alt: "Power Apps",
      },
      {
        key: 29,
        src: "/img/microsoft/services/PowerAutomate.png",
        alt: "Power Automate",
      },
      {
        key: 30,
        src: "/img/microsoft/services/PowerVirtualAgents.png",
        alt: "Power Virtual Agents",
      },
      {
        key: 31,
        src: "/img/microsoft/services/To-do.png",
        alt: "To-do",
      },
    ],
  },
  {
    id: 8,
    title: "Advanced analytics",
    para: "Work smarter with personal and organizational productivity insights. Make fast, informed decisions with advanced analytical capabilities.",
    list: [
      {
        key: 32,
        src: "/img/microsoft/services/Power-BI.png",
        alt: "Power BI",
      },
      {
        key: 33,
        src: "/img/microsoft/services/VivaInsights.png",
        alt: "Viva Insights",
      },
    ],
  },
  {
    id: 9,
    title: "Identity and access management",
    para: "Secure connections between people, devices, apps, and data. Increase your security and productivity with a single, holistic identity solution that gives you flexibility and control.",
    className: "mdb:min-h-[216px]",
    list: [
      {
        key: 34,
        alt: "Windows Hello, Credential Guard, and Direct Access",
      },
      {
        key: 35,
        alt: "Azure Active Directory Premium plan 1",
      },
      {
        key: 36,
        alt: "Azure Active Directory Premium plan 2",
      },
    ],
  },
  {
    id: 10,
    title: "Threat protection",
    para: "Detect and investigate advanced threats, compromised identities, and malicious actions across your on-premises and cloud environments. Protect your organization with adaptive, built-in intelligence.",
    className: "mdb:min-h-[332px]",
    list: [
      {
        key: 37,
        alt: "Microsoft Advanced Threat Analytics",
      },
      {
        key: 38,
        alt: "Microsoft Defender Antivirus and Device Guard",
      },
      {
        key: 39,
        alt: "Microsoft 365 Defender",
      },
      {
        key: 40,
        alt: "Microsoft Defender for Endpoint P1",
      },
      {
        key: 41,
        alt: "Microsoft Defender for Endpoint P2",
      },
      {
        key: 42,
        alt: "Microsoft Defender for Office 365",
      },
      {
        key: 43,
        alt: "Microsoft Defender for Identity",
      },
    ],
  },
  {
    id: 11,
    title: "Information protection",
    para: "Protect your sensitive data everywhere, even in motion and when shared. Gain visibility and control over how any file is being used with a comprehensive and integrated information protection solution.",
    className: "mdb:min-h-[300px]",
    list: [
      {
        key: 44,
        alt: "Data Loss Prevention for email and files",
      },
      {
        key: 45,
        alt: "Windows Information Protection and BitLocker",
      },
      {
        key: 46,
        alt: "Azure Information Protection P1",
      },
      {
        key: 47,
        alt: "Azure Information Protection P2",
      },
      {
        key: 48,
        alt: "Microsoft Defender for Cloud Apps",
      },
    ],
  },
  {
    id: 12,
    title: "Security management",
    para: "Gain visibility into your cloud apps and services, build insights with sophisticated analytics, and control how your data travels so you can respond to and combat cyberthreats.",
    list: [
      {
        key: 49,
        alt: "Microsoft Secure Score",
      },
      {
        key: 50,
        alt: "Microsoft Security and Compliance Center",
      },
    ],
  },
  {
    id: 13,
    title: "Compliance management",
    para: "Assess compliance risks, govern and protect sensitive data, and respond to regulatory requirements.",
    list: [
      {
        key: 51,
        alt: "Manual retention labels, content search, basic audit",
      },
      {
        key: 52,
        alt: "Basic org-wide or location-wide retention policies, Teams retention policies, core eDiscovery, litigation hold",
      },
      {
        key: 53,
        alt: "Rules-based automatic retention policies, machine learning-based retention, records management",
      },
      {
        key: 54,
        alt: "Advanced eDiscovery, advanced audit",
      },
      {
        key: 55,
        alt: "Insider Risk Management, communication compliance, information barriers, customer Lockbox, privileged access management",
      },
      {
        key: 56,
        alt: "Built-in third-party connections",
      },
    ],
  },
]

function filters(arr = [], exclude = [], listExclude = []) {
  return arr
    .map(a => ({
      ...a,
      isHidden: exclude.includes(a.id),
      list: a.list.filter(l => !listExclude.includes(l.key))
    }))
}

const forEnterprises = [
  {
    key: "e1",
    title: "Microsoft 365",
    plan: "E3",
    price: "₹ 2499 user/mo.",
    covered: filters(covered, [], [33, 36, 39, 41, 42, 43, 47, 48, 53, 54, 55, 56]),
  },
  {
    key: "e2",
    title: "Microsoft 365",
    plan: "E5",
    price: "₹ 3999 user/mo.",
    covered: filters(covered, [], [40]),
  },
  {
    key: "e3",
    title: "Microsoft 365",
    plan: "F3",
    price: <>₹ 555 <br /> user/mo.</>,
    covered: filters(covered, [8], [16, 36, 39, 40, 41, 42, 43, 44, 47, 48, 52, 53, 54, 55, 56]),
  },
]

function Card({ title, plan, price, covered, updateModal }) {
  return (
    <div className="flex flex-col max-w-md bg-white">
      <div className="dfc items-center gap-4 p-6 bg-primary text-white rounded-md text-center sticky top-20">
        <p className="text-[13px] md:text-[15px] font-medium">{title}</p>
        <p className="text-lg md:text-xl font-semibold">Enterprise {plan}</p>
        <p className="text-3xl md:text-4xl font-bold">{price}</p>

        <button
          className="mt-2 text-[13px] md:text-[15px] xl:text-[17px] font-medium bg-[#001252] text-white shadow-[0_4px_4px_0_#00000040]"
          onClick={updateModal}
        >
          Order Now
        </button>
      </div>

      <div className="grid gap-8 my-6 px-5">
        {
          covered.map(c => (
            <div key={c.id} className={`${c.className || ""} ${c.isHidden ? "opacity-0" : ""}`}>
              <div className="mb-4 text-center">
                <p className="text-[13px] md:text-[15px] xl:text-[17px] font-medium">{c.title}</p>
                <p className="text-[13px] text-[#656565E3]">{c.para}</p>
              </div>

              <div className="dc flex-wrap sm:gap-4 px-4 text-xs font-medium text-[#605E5E]">
                {c.list.map(l => (
                  <div
                    key={l.key}
                    className="dc flex-col gap-1 text-center"
                  >
                    {
                      l.src && <Image
                        src={l.src}
                        alt={l.alt}
                        width={36}
                        height={36}
                      />
                    }

                    {l.alt}
                  </div>
                ))}
              </div>
            </div>
          ))
        }
      </div>

      <button
        className="block m-auto mb-6 text-xs md:text-sm xl:text-base"
        onClick={updateModal}
      >
        Order Now
      </button>
    </div>
  )
}

function Enterprise() {
  const [modal, setModal] = useState("")

  const updateModal = val => setModal(val)
  const closeModal = () => setModal("")

  return (
    <>
      {
        forEnterprises.map(f => (
          <Card
            {...f}
            updateModal={() => updateModal(f.plan)}
          />
        ))
      }

      {
        modal &&
        <OrderNow
          isOpen
          closeModal={closeModal}
        />
      }
    </>
  )
}

export default Enterprise