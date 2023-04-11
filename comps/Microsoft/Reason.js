const data = [
  {
    key: "1",
    title: "Personalized payment",
    para: "We offer multiple payment modes to ensure your convenience when buying Microsoft 365 from us.",
  },
  {
    key: "2",
    title: "Effortless Onboarding",
    para: "Our team helps you select the most suitable MS365 plan for your business needs, ensuring a seamless and effortless onboarding experience.",
  },
  {
    key: "3",
    title: "Secure Collaboration",
    para: "Microsoft 365's security features enable secure collaboration, enhancing productivity and teamwork while maintaining enterprise-level security.",
  },
  {
    key: "4",
    title: "24x7 Technical support",
    para: "We're Here to Assist You with Everything from Basic Information to Ticket Escalation.",
  },
  {
    key: "5",
    title: "Migration Support",
    para: "Get Your Data Safely and Smoothly Transferred to Microsoft 365 with Our Reliable Migration Support.",
  },
]

function Card({ title, para }) {
  return (
    <div className="max-w-sm p-6 bg-white rounded-[18px]">
      <div className="mb-2 text-lg md:text-xl xl:text-[22px] font-semibold text-[#202020]">
        {title}
      </div>

      <div className="text-sm md:text-base xl:text-lg">
        {para}
      </div>
    </div>
  )
}

function Reason() {
  return (
    <div className="p-8 pt-12 bg-light">
      <h2 className="text-2xl md:text-3xl xl:text-[38px] font-bold text-[#202020] text-center">
        Reasons to buy Microsoft 365 from Truseve
      </h2>

      <div className="flex flex-wrap justify-center gap-x-14 gap-y-8 mdb:gap-y-16 xl:gap-y-20 my-8 mdb:mt-12">
        {data.map(d => <Card {...d} />)}
      </div>
    </div>
  )
}

export default Reason