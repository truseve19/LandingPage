import { useRef, useState } from 'react';
import Arrow from '../../svg/dropdown.svg';

const data = [
  {
    key: "1",
    quest: "What exactly is Microsoft 365?",
    ans: "Microsoft 365 is a complete productivity platform that can help you and your team work more productively whether you're at home, on the move, or in the office thanks to its powerful Office programs, cutting-edge security features, and intelligent Cloud services.",
  },
  {
    key: "2",
    quest: "What’s the difference between monthly, annual & annual commitment payment ?",
    ans: <>
      <p className='mb-2'>To provide you with the greatest amount of flexibility, different payment options are available.</p>

      <p className='mb-1'>Microsoft 365 Business Basic, Apps for business, Business Standard, and Business Premium plans are available for monthly commitment payment or annual commitment payment.</p>
      <ul className='mb-2 pl-8 list-outside list-disc'>
        <li><strong className='font-medium'>Monthly commitment payment:</strong> Pay month by month and cancel at any time.</li>
        <li><strong className='font-medium'>Annual commitment payment:</strong> Sign up for a one-year subscription and benefit from a discount for using this payment option. By default, your billing plan will be set to monthly billing. After your purchase, you can change your billing plan to annual billing within the Admin Portal.</li>
      </ul>

      <p>The Microsoft 365 Enterprise and Office 365 Enterprise plans (including standalone plans such as Exchange Online) and Microsoft 365 Apps for enterprise are available for annual commitment payment.</p>
      <ul className='pl-8 list-outside list-disc'>
        <li><strong className='font-medium'>Annual commitment payment:</strong> Sign up for a one-year subscription and choose to pay monthly or for the entire year at the time you sign up.</li>
      </ul>
    </>,
  },
  {
    key: "3",
    quest: "Does Microsoft 365 require an internet connection to use?",
    ans: "Office applications like Word, Excel, PowerPoint, and Outlook can be downloaded and used offline on any device. When online, OneDrive instantly syncs any changes you make. As a result, you can view your documents from any OneDrive-enabled device, even when no internet connection is available. You can manage your email, appointments, meetings, and tasks using Outlook. Your Outlook inbox and outbox will sync with offline modifications.",
  },
  {
    key: "4",
    quest: "How many devices can I install the Office apps on?",
    ans: "To get the most out of Microsoft Office, you can install it on up to five devices (PCs or Macs, Tablets, and Smartphones).",
  },
  {
    key: "5",
    quest: "What is the maximum number of users that can attend a Microsoft Teams meeting?",
    ans: "You can invite up to 1,000 internal or external people to join a meeting from Computers, Laptops, Tablets, and Smartphones, allowing for chat, audio, and video interaction. Add 10,000 view-only attendees for larger meetings.",
  },
  {
    key: "6",
    quest: "What forms of payments are accepted?",
    ans: "Depending on the services you select, you can choose to be billed Monthly or Annually, and all major debit cards and credit cards, Bank transfers - IMPS, NEFT, RTGS are accepted for payment.",
  },
  {
    key: "7",
    quest: "Is it possible to cancel my subscription?",
    ans: "Subscriptions may be cancelled within 7 days of purchase for a pro-rata refund, minus a cancellation fee of Rs. 100.",
  },
  {
    key: "8",
    quest: "What happens to the information I store in my Microsoft 365 account?",
    ans: "Your data is yours. If you decide to cancel your Microsoft 365 subscription, you can download your data for example, your email and documents on team sites and save it to another location. You should save your data before you cancel. After you cancel your subscription, data associated with your Microsoft 365 account will be available to your administrator(s) in a limited function account for 90 days."
  },
  {
    key: "9",
    quest: "How long does the Microsoft 365 free trial last?",
    ans: "Microsoft provides a 30-day free trial on selected SKUs, and we will assist you in determining which SKU is best for you."
  },
]

function Card({ quest, ans, isActive, height, onClk }) {
  const panelRef = useRef(null)

  const onClick = () => {
    onClk(panelRef.current?.clientHeight)
  }

  return (
    <div className={`accordion-wrapper p-4 sm:p-6 mb-6 bg-white rounded-[10px] text-[13px] md:text-sm xl:text-base ${isActive ? "open" : ""}`}>
      <button
        className={`df not-theme w-full transition-all text-left ${isActive ? "text-sm md:text-base xl:text-lg font-semibold" : ""}`}
        onClick={onClick}
      >
        <span className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors shrink-0 ${isActive ? "bg-[#5D5FEF]" : "bg-[#5D5FEF66]"}`}></span>
        {quest}
        <Arrow className={`w-4 h-4 md:w-5 md:h-5 shrink-0 ml-auto stroke-[#5D5FEF] transition-transform ${isActive ? "rotate-180" : ""}`} />
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
      <h2 className="mb-6 text-2xl md:text-3xl xl:text-[38px] font-bold text-[#202020] text-center">
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