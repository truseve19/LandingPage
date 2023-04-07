import { useRef, useState } from 'react';
import Arrow from '../../svg/dropdown.svg';

const data = [
  {
    key: "1",
    quest: "What is Microsoft 365?",
    ans: "With its robust Office apps, advanced security features, and intelligent cloud services, Microsoft 365 is a comprehensive productivity platform that can help you and your team work more efficiently and effectively whether you're at home, on the go, or working from the office.",
  },
  {
    key: "2",
    quest: "Do I need an internet connection to use Microsoft 365?",
    ans: "Office apps such as Word, Excel, PowerPoint, and Outlook can be installed on any device and used offline. Changes you make sync automatically with OneDrive when online. This enables you to access your documents from any device with OneDrive installed, even without an internet connection. Outlook allows you to manage your email, appointments, meetings, and tasks. Offline changes to your Outlook inbox or outbox will sync across devices when you reconnect to the internet.",
  },
  {
    key: "3",
    quest: "How many devices can I install the Office apps on?",
    ans: "Access Office apps on up to five PCs or Macs, five tablets, and five smartphones to get the most out of Office.",
  },
  {
    key: "4",
    quest: "How many users can I host on a Microsoft Teams meeting?",
    ans: "With Microsoft Teams, you can invite up to 1,000 participants, internal or external, to join a meeting from desktops, laptops, tablets, and smartphones, enabling chat, audio, and video interaction. For larger meetings, add up to 10,000 view-only attendees.",
  },
  {
    key: "5",
    quest: "What forms of payments are accepted?",
    ans: "You can choose to be billed monthly or annually, and all major credit cards are accepted for payment depending on the services you select.",
  },
  {
    key: "6",
    quest: "Which languages are supported by Microsoft 365?",
    ans: "Most countries and regions offer Microsoft 365 plans. If unavailable, an Office 2021 suite is an alternative. Ensure selecting the correct country or region for billing, payment, and legal agreements.",
  },
  {
    key: "7",
    quest: "Can I cancel my subscription? What happens to the data I upload in my Microsoft 365 account?",
    ans: "Subscriptions may be cancelled within 7 days of purchasing the license for a pro-rata refund, minus an additional cancellation charge of Rs. 100.",
  },
]

function Card({ quest, ans, isActive, height, onClk }) {
  const panelRef = useRef(null)

  const onClick = () => {
    onClk(panelRef.current?.clientHeight)
  }

  return (
    <div className={`accordion-wrapper p-6 mb-6 bg-white rounded-[10px] ${isActive ? "open" : ""}`}>
      <button
        className={`df not-theme w-full transition-all ${isActive ? "text-lg font-semibold" : ""}`}
        onClick={onClick}
      >
        <span className={`w-4 h-4 rounded-full transition-colors ${isActive ? "bg-[#5D5FEF]" : "bg-[#5D5FEF66]"}`}></span>
        {quest}
        <Arrow className={`w-5 h-5 ml-auto stroke-[#5D5FEF] transition-transform ${isActive ? "rotate-180" : ""}`} />
      </button>

      <div
        className="accordion-panel"
        style={{ height: isActive ? `${height}px` : 0 }}
      >
        <div ref={panelRef} className="pt-4 px-2">
          {ans}
        </div>
      </div>
    </div>
  )
}

function Faq() {
  const [active, setActive] = useState("")
  const [height, setHeight] = useState(0)

  const onClk = (key, expandTo) => {
    setActive(p => p === key ? "" : key)
    setHeight(expandTo)
  }

  return (
    <div className='p-12 bg-light'>
      <h2 className="mb-6 text-[38px] font-bold text-[#202020] text-center">
        Microsoft 365 FAQ’s
      </h2>

      <div className='max-w-4xl mx-auto'>
        {
          data.map(d => (
            <Card
              {...d}
              isActive={active === d.key}
              height={height}
              onClk={ht => onClk(d.key, ht)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Faq