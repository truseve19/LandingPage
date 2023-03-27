import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

const animation = { duration: 10000, easing: t => t }

const data = [
  {
    id: "1",
    img: "/img/home/trusted/1.png",
    num: "2019",
    txt: "Since",
  },
  {
    id: "2",
    img: "/img/home/trusted/3.png",
    num: "25+",
    txt: "Companies",
  },
  {
    id: "3",
    img: "/img/home/trusted/2.png",
    num: "150+",
    txt: "Service delivery",
  },
]

const sliderImgs = [
  {
    key: "1",
    alt: "",
    src: "/img/home/customers/BuzzArk.png",
    width: 110,
    height: 78,
  },
  {
    key: "2",
    alt: "",
    src: "/img/home/customers/sanvir.png",
    width: 97,
    height: 78,
  },
  {
    key: "3",
    alt: "",
    src: "/img/home/customers/rediff.png",
    width: 149,
    height: 40,
  },
  {
    key: "4",
    alt: "",
    src: "/img/home/customers/Bharath-University.png",
    width: 95,
    height: 97,
  },
  {
    key: "5",
    alt: "",
    src: "/img/home/customers/srm.png",
    width: 132,
    height: 45,
  },
  {
    key: "6",
    alt: "",
    src: "/img/home/customers/escon.png",
    width: 112,
    height: 48,
  },
  {
    key: "7",
    alt: "",
    src: "/img/home/customers/tn-electricity.png",
    width: 134,
    height: 80,
  },
  {
    key: "8",
    alt: "",
    src: "/img/home/customers/bannari.png",
    width: 192,
    height: 35,
  },
  {
    key: "9",
    alt: "",
    src: "/img/home/customers/kc-high.png",
    width: 57,
    height: 86,
  },
  {
    key: "10",
    alt: "",
    src: "/img/home/customers/agraga.png",
    width: 118,
    height: 69,
  },
  {
    key: "11",
    alt: "",
    src: "/img/home/customers/Easwari-Eng.png",
    width: 99,
    height: 99,
  },
]

function Trusted() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 2
    },
    breakpoints: {
      "(min-width: 450px)": {
        slides: {
          perView: 3
        },
      },
      "(min-width: 640px)": {
        slides: {
          perView: 4
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 5
        },
      },
      "(min-width: 900px)": {
        slides: {
          perView: 6
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 7
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 8
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })

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

      <div className="-mx-4 lg:-mx-6">
        <div ref={sliderRef} className="keen-slider">
          {
            sliderImgs.map(s => (
              <div key={s.key} className="keen-slider__slide df justify-center">
                <Image {...s} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Trusted