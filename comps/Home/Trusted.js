import Image from "next/image";

const data = [
  {
    id: "1",
    img: "/img/trusted/1.png",
    num: "2019",
    txt: "Since",
  },
  {
    id: "2",
    img: "/img/trusted/3.png",
    num: "25+",
    txt: "Companies",
  },
  {
    id: "3",
    img: "/img/trusted/2.png",
    num: "150+",
    txt: "Service delivery",
  },
]

function Trusted() {
  return (
    <section className="bg-light">
      <h2 className="theme-h2">
        Trusted by Enterprises
      </h2>

      <div className="grid grid-cols-3 justify-center gap-4 sm:gap-12 mdb:gap-16 lg:gap-24 text-center sm:w-fit sm:mx-auto my-8 md:my-14 lg:my-20">
        {
          data.map(d => (
            <div key={d.id}>
              <Image
                src={d.img}
                alt=""
                width={d.id === "1" ? 16 : 22}
                height={d.id === "1" ? 16 : 22}
                className="mx-auto"
              />
              <p className="my-2 text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold">{d.num}</p>
              <p className="text-sm md:text-base xl:text-xl font-medium text-[#0000008F]">{d.txt}</p>
            </div>
          ))
        }
      </div>

      <div className="grid grid-cols-6 items-center justify-items-center gap-4 lg:max-w-5xl mx-auto">
        <Image
          src="/img/trusted/BuzzArk.png"
          alt=""
          width={125}
          height={90}
        />
        <Image
          src="/img/trusted/Easwari-Eng-clg.png"
          alt=""
          width={100}
          height={100}
        />
        <Image
          src="/img/trusted/Rediff.png"
          alt=""
          width={150}
          height={40}
        />
        <Image
          src="/img/trusted/BuzzArk.png"
          alt=""
          width={125}
          height={90}
        />
        <Image
          src="/img/trusted/Easwari-Eng-clg.png"
          alt=""
          width={100}
          height={100}
        />
        <Image
          src="/img/trusted/Rediff.png"
          alt=""
          width={150}
          height={40}
        />
      </div>
    </section>
  )
}

export default Trusted