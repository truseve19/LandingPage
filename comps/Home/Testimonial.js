import Image from "next/image";
import Arrow from "../../svg/arrow.svg";
import ConnectUsBtn from "../Common/ConnectUsBtn";

const data = [
  {
    id: "1",
    list: [
      {
        key: "1",
        img: "",
        from: "BHEL",
        name: "Peter Parker",
        role: "CEO",
        comment: '“Truseve” is the most effective platform to handle the Cloud and access to various tools.',
      },
      {
        key: "4",
        img: "",
        from: "BHEL",
        name: "Peter Parker",
        role: "CEO",
        comment: '“Truseve” is the most effective platform to handle the Cloud and access to various tools. “Truseve” platform to handle the Cloud and access to various tools.',
      },
    ]
  },
  {
    id: "2",
    list: [
      {
        key: "2",
        img: "",
        from: "BHEL",
        name: "Peter Parker",
        role: "CEO",
        comment: '“Truseve” is the most effective platform to handle the Cloud and access to various tools. They are rated 5 stars by me, coz of the excellent service provided by them, most trusted platform to buy microsoft and other main stream applications.',
      },
      {
        key: "5",
        img: "",
        from: "BHEL",
        name: "Peter Parker",
        role: "CEO",
        comment: '“Truseve” is the most effective platform to handle the Cloud and access to various tools. “Truseve” platform to handle the Cloud.',
      },
    ]
  },
  {
    id: "3",
    list: [
      {
        key: "3",
        img: "",
        from: "BHEL",
        name: "Peter Parker",
        role: "CEO",
        comment: 'Top Notch service by the team Truseve, their timely response saved us lakhs of money. Truseve i found them in my hardest time, they make our job easy and less.',
      },
      {
        key: "6",
        img: "",
        from: "BHEL",
        name: "Peter Parker",
        role: "CEO",
        comment: 'Top Notch service by the team Truseve, their timely response saved us lakhs of money',
      },
    ]
  },
]

function Card({ comment, from, role, name }) {
  return (
    <div className="px-5 py-6 mb-4 md:mb-6 bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
      <div className="mb-4 md:mb-6 text-xs md:text-sm lg:text-base xl:text-lg text-[##C6C6C]">
        {comment}
      </div>

      <div className="df gap-4">
        <Image
          height={48}
          width={48}
          src="/img/home/profile.png"
          alt=""
          className="w-6 md:w-8 xl:w-12"
        />

        <div>
          <strong className="block text-sm md:text-base lg:text-lg xl:text-[22px] font-semibold">{from}</strong>
          <strong className="text-xs md:text-sm xl:text-base font-medium">{name}</strong>
          <p className="text-[11px] md:text-[13px] xl:text-[15px] text-[#ABAAAA]">{role}</p>
        </div>
      </div>
    </div>
  )
}

function Testimonial() {
  return (
    <section className="testimonial">
      <div className="mb-4 md:mb-8 lg:mb-12 md:ml-4 lg:ml-8">
        <h2 className="theme-h2 text-left">
          Testimonials about Truseve
        </h2>

        <p className="my-2 lg:my-4 text-sm md:text-base lg:text-lg xl:text-[22px] font-semibold text-[#494949]">
          We support all type of customer needs
        </p>

        <ConnectUsBtn
          txt={<>Request Quote <Arrow className="mt-1 group-hover:translate-x-1 transition-transform" /></>}
          className="not-theme df p-0 text-sm md:text-base lg:text-lg xl:text-[22px] font-semibold leading-[1] text-primary hover:underline group"
        />
      </div>

      <div className="flex md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto overflow-x-auto">
        {
          data.map(d => (
            <div key={d.id} className="max-md:min-w-[250px]">
              {
                d.list.map(l => (
                  <Card {...l} />
                ))
              }
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Testimonial