import Image from "next/image";

const data = [
  {
    id: "1",
    img: "/img/home/choose/Billing.png",
    title: "Billing Flexibility",
    desc: "We provide multiple modes of payment with easy flexible plans that suits your company’s specific needs and preferences.",
  },
  {
    id: "2",
    img: "/img/home/choose/fullday.png",
    title: "24x7 Technical Support",
    desc: "We're here for you, around the clock, for all your support needs. From answering basic questions to on-demand premises support, we've got you covered, 24/7.",
  },
  {
    id: "3",
    img: "/img/home/choose/microsoft.png",
    title: "Trusted Partner",
    desc: "We are a trusted partner to many high-level companies, providing comprehensive Software and Hardware solutions to businesses of all sizes.",
  },
  {
    id: "4",
    img: "/img/home/choose/migration.png",
    title: "Seamless Migration",
    desc: "We recognize the significance of data transfer during the transition of services, which is why our migration experts are available to guarantee a smooth switch without any interruptions.",
  },
  {
    id: "5",
    img: "/img/home/choose/customised.png",
    title: "Affordable Hardware Solutions",
    desc: "From startups to enterprises, we offer customized Hardware solutions that cover everything like Desktop, Laptop, Servers and also support Server management and Data backup.",
  },
  {
    id: "6",
    img: "/img/home/choose/setup.png",
    title: "Setup and Deployment Support",
    desc: "You can leave the setup and configuration to our experts, they will tailor your infrastructure to your needs, making the transition process faster and more efficient.",
  },
]

function Choose() {
  return (
    <section className="bg-light relative isolate overflow-x-hidden">
      <div className="choose-blur-bg -mt-px absolute inset-0 z-0"></div>
      <Image
        className="max-sm:w-24 blur-[2px] absolute -top-8 -right-6 z-[1]"
        height={110}
        width={110}
        src="/img/home/single.png"
        alt=""
      />
      <Image
        className="blur-sm absolute bottom-0 left-0 z-[1]"
        height={80}
        width={80}
        src="/img/home/single.png"
        alt=""
      />

      <div className="mt-12 md:mt-8 lg:mt-14 mb-4 md:mb-8 lg:mb-12 sticky top-0 z-[1]">
        <h2 className="theme-h2 mb-2 text-[#202020]">
          Why choose Truseve for your IT solutions
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-6xl xl:max-w-7xl mx-auto relative">
        {
          data.map(d => (
            <div key={d.id} className="p-4 bg-white z-[2] rounded-lg md:rounded-xl">
              <div className="df sm:gap-4 mb-2 sm:mb-4">
                <Image
                  width={36}
                  height={36}
                  src={d.img}
                  alt=""
                  className="w-6 md:w-8 lg:w-9"
                />

                <h3 className="text-sm md:text-base lg:text-lg xl:text-[22px] font-semibold text-[#202020]">
                  {d.title}
                </h3>
              </div>

              <div className="text-xs md:text-sm lg:text-base xl:text-lg text-[#6C6C6C]">
                {d.desc}
              </div>
            </div>
          ))
        }

        <Image
          className="blur-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]"
          height={250}
          width={250}
          src="/img/home/center.png"
          alt=""
        />
      </div>
    </section>
  )
}

export default Choose