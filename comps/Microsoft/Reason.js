import Image from "next/image";

const data = [
  {
    key: "1",
    title: "Personalized Payments",
    para: "We offer multiple payment modes to ensure your convenience when buying Microsoft 365 from us.",
  },
  {
    key: "2",
    title: "Effortless Onboarding",
    para: "Our team helps you select the most suitable Microsoft 365 plan for your business needs, ensuring a seamless and effortless onboarding experience.",
  },
  {
    key: "3",
    title: "Migration Support",
    para: "Get Your data safely and smoothly transferred from a host of suites/mailing platforms like google workspace, zoho, zimbra, Godaddy, etc to Microsoft 365 with our reliable migration support.",
  },
  {
    key: "4",
    title: "24X7 Technical Support",
    para: "Our expert support team will assist you with everything from basic information to ticket escalation.",
  },
  {
    key: "5",
    title: "Secure Collaboration",
    para: "Microsoft 365's security features enable secure collaboration, enhancing productivity and teamwork while maintaining enterprise-level security.",
  },
]

function Card({ title, para }) {
  return (
    <div className="max-w-sm p-6 bg-white rounded-[18px] z-[1]">
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
    <div className="p-8 pt-12 bg-light isolate relative">
      <h2 className="text-2xl md:text-3xl xl:text-[38px] font-bold text-[#202020] text-center">
        Reasons to buy Microsoft 365 from Truseve
      </h2>

      <Image
        className="blur-[18px] absolute top-1/2 left-4 md:left-40 -translate-y-1/2 z-0"
        height={125}
        width={125}
        src="/img/microsoft/Microsoft.png"
        alt=""
      />

      <Image
        className="blur-[3px] absolute bottom-4 md:bottom-12 right-4 md:right-40 z-0"
        height={125}
        width={125}
        src="/img/microsoft/Microsoft.png"
        alt=""
      />

      <div className="flex flex-wrap justify-center gap-x-14 gap-y-8 mdb:gap-y-16 xl:gap-y-20 my-8 mdb:mt-12">
        {data.map(d => <Card {...d} />)}
      </div>
    </div>
  )
}

export default Reason